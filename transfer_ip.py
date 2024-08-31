import json
import os
import time

import redis
from dotenv import load_dotenv
from web3 import Web3
from web3.exceptions import Web3RPCError

load_dotenv()

provider_url = os.getenv("RPC_URL")

from loguru import logger

logger.add("gather_token.log")


def send_ip(w3, from_address, private_key, to_address, token_value=0.995):
    # 获取私钥账户
    from_addr = w3.to_checksum_address(from_address)
    # 转账
    to_addr = w3.to_checksum_address(to_address)
    # 设置转账金额
    value = w3.to_wei(token_value, "ether")
    # 获取最新的 nonce 值
    nonce = w3.eth.get_transaction_count(from_addr)

    # 设置交易参数
    transaction = {
        "nonce": nonce,
        "to": to_addr,
        "value": value,
        "gas": 21000,
        "gasPrice": w3.eth.gas_price,
        "chainId": 1513,  # 1 代表以太坊主网 1513 story测试网
    }

    for i in range(20):
        # 使用私钥签名交易
        signed_txn = w3.eth.account.sign_transaction(transaction, private_key)
        # 发送交易
        try:
            txn_hash = w3.eth.send_raw_transaction(signed_txn.raw_transaction)
            break
        except Web3RPCError as e:
            if "insufficient funds" in e.message:
                transaction["value"] = transaction["value"] - 10000000000000000
                logger.debug(f'转账失败，重新设置转账金额：{transaction["value"]}')
    logger.info(
        f"""
交易哈希: {txn_hash.hex()}
    """
    )


def sum_up_token(redis_client):
    w3 = Web3(Web3.HTTPProvider(provider_url))
    # 测试网络联通状态
    if not w3.is_connected():
        logger.info("网络连接失败")
        return

    while True:
        # 账户地址和私钥（仅示例，不要在实际场景中使用）
        next_wallet = redis_client.rpop("success_wallet_list")
        if not next_wallet:
            # logger.info("没有待转账账户，等待1秒后重试")
            time.sleep(1)
            continue

        to_address = os.getenv("to_address")
        #         logger.info(
        #             f"""
        # 开始转账至{to_address}
        # """
        #         )

        wallet_ = json.loads(next_wallet)
        from_address = wallet_["address"]
        private_key = wallet_["pri_key"]

        # 获取地址余额wei
        wallet = w3.to_checksum_address(from_address)
        wei = w3.eth.get_balance(wallet)
        # 获取地址余额
        balance = w3.from_wei(wei, "ether")

        if balance == 0:
            # logger.warning("账户余额为0，暂时跳过")
            redis_client.rpush("success_wallet_list", json.dumps(wallet_))
            continue

        logger.info(
            f"""
钱包地址：{wallet_["address"]}
钱包私钥：{wallet_["pri_key"]}
账户余额（wei）：{wei}
账户余额（ether）：{balance}
        """
        )
        try:
            send_ip(w3, from_address, private_key, to_address)
        except Exception as e:
            logger.error(f"转账失败：{e}")
            redis_client.rpush("success_wallet_list", json.dumps(wallet_))


if __name__ == "__main__":
    with redis.StrictRedis(host="localhost", port=6379, db=0) as r:
        while True:
            try:
                sum_up_token(r)
            except:
                continue
