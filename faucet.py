import json
import os
import random
import re
import time

import redis
from curl_cffi import requests
from dotenv import load_dotenv
from eth_account import Account
from loguru import logger

logger.add("faucet.log")

act1_headers = {
    "Host": "faucet-app-pi.vercel.app",
    "Connection": "keep-alive",
    "sec-ch-ua": '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
    "Next-Router-State-Tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "Content-Type": "text/plain;charset=UTF-8",
    "Accept": "text/x-component",
    "Next-Action": "4bb3c690c4758b1deb49ab27129bac517ea77d04",
    # "baggage": baggage,
    # "sentry-trace": sentrytrace,
    "sec-ch-ua-platform": '"Windows"',
    "Origin": "https://faucet-app-pi.vercel.app",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://faucet-app-pi.vercel.app/",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
}

data = [
    {
        "address": "",
        "token": "0.z-SRmsgEpOgx1eufh36MOyCGvBklzTdDnQrFxnB8r5CDZiZa5CbKX0sCdovHLa2ry1p2mhM5BfdoMolvD9HX2kIfyw5LOMPvvuhps0-2WXEysKhMY6eT8x3NKrwU00yEQH9q4HBB2j4BU6t3xVhafoJbkH0UCerqQJLJrZOk4owVmkeyJO6URwxWhSdTre9pI-S7ib4Wb6VvWYTPIyX2mXmH7MBNPu9JJMHzqxtCFWCNmlVKUhNhN8lHXUmquJn6ndCA8D0nHTK1QxMeqZEZJs9oixriQtJK28fHSfS7LIeFYYroeEKWPCGNtVSlnUHvT0HJ5baqZJ9b8d-2mIUTx6wk_qEMu4-KhxRfBbWQJsMz3xTQfQlFamEye4H3nx4vkj9lLjxSGH-Ko2cxBetuRBQqQErcsDAjTolXESfiOicG3BLCeBD3qRpHB4ePI_sMRxprYqWQBsKZjR7aQtGme3lGIxt4Z-2W2gAfBT-Hmwo.8ogcu54XeUD6dBNoeiG6zw.72e516eea67040fc302ef6255ff3e3502db33a3a7b74da6291df283ad1982bf5",
        "id": "bd39ebcc-b7bb-4cae-be59-113587dbb8f3",
        "provider": "X",
    }
]


class wallet:
    def __init__(self, address, pri_key):
        self.address = address
        self.pri_key = pri_key


def generate_random_str(randomlength=16):
    """
    生成一个指定长度的随机字符串
    """
    random_str = ""
    base_str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789"
    length = len(base_str) - 1
    for _ in range(randomlength):
        random_str += base_str[random.randint(0, length)]
    return random_str


def set_address(addr):
    data[0]["address"] = addr
    data[0]["id"] = generate_random_str()


def send_request(headers, wallet, redis_client):
    proxies = {"http": "127.0.0.1:8888", "https": "127.0.0.1:8888"}
    load_dotenv(override=True)
    vcrcs_cookie = os.getenv("vcrcs")
    #     logger.debug(
    #         f"""
    # cookie:{vcrcs_cookie}
    # """
    #     )
    response = requests.post(
        "https://faucet-app-pi.vercel.app/",
        headers=headers,
        cookies={
            "_vcrcs": vcrcs_cookie,
        },
        verify=False,
        proxies=proxies,
        data=json.dumps(data, separators=(",", ":")),
        # impersonate="chrome124",
    )

    parsed_response = json.loads(re.findall("1:(.*?)\n", response.text)[0])
    result = parsed_response["result"]
    logger.info(
        f"""
钱包地址：{wallet.address}
钱包私钥：{wallet.pri_key}
请求状态：{response.status_code} {result}
请求结果：{parsed_response["message"]}
    """
    )
    if not result:
        return

    # 写入redis
    redis_client.rpush(
        "success_wallet_list",
        json.dumps({"address": wallet.address, "pri_key": wallet.pri_key}),
    )


def create_wallet():
    account = Account.create()
    return wallet(account.address, account.key.hex())


def faucet(redis):
    wallet = create_wallet()
    set_address(wallet.address)
    send_request(act1_headers, wallet, redis)


if __name__ == "__main__":
    with redis.StrictRedis(host="localhost", port=6379, db=0) as r:
        while True:
            try:
                faucet(r)
            except Exception as e:
                logger.exception(f"报错，重启：{e}")
            time.sleep(1)
