import json
import os
import random
import re
import time

import redis
from curl_cffi import requests
from eth_account import Account

from config import cookies
from headers import act1_headers

from loguru import logger

logger.add("faucet.log")

data = [
    {
        "address": "0xcd1bd723bb7c1da46e12400c492ab34072838bd4",
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
    response = requests.post(
        "https://faucet-app-pi.vercel.app/",
        headers=headers,
        cookies=cookies,
        verify=False,
        proxies=proxies,
        data=json.dumps(data, separators=(",", ":")),
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

    #  # 写入本地文件
    # if not os.path.exists("success.json"):
    #     with open("success.json", "w") as f:
    #         json.dump([{"address": wallet.address, "pri_key": wallet.pri_key}], f)
    # else:
    #     # 增量写入
    #     with open("success.json", "r") as f:
    #         l = json.load(f)
    #         l.append({"address": wallet.address, "pri_key": wallet.pri_key})
    #     with open("success.json", "w") as f:
    #         json.dump(l, f)


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
