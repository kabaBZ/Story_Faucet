# import cloudscraper

# requests = cloudscraper.create_scraper()

from config import action1, baggage, sentrytrace, action2


act1_headers = {
    "Host": "faucet-app-pi.vercel.app",
    "Connection": "keep-alive",
    "sec-ch-ua": '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
    "Next-Router-State-Tree": "%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
    "Content-Type": "text/plain;charset=UTF-8",
    "Accept": "text/x-component",
    "Next-Action": action1,
    "baggage": baggage,
    "sentry-trace": sentrytrace,
    "sec-ch-ua-platform": '"Windows"',
    "Origin": "https://faucet-app-pi.vercel.app",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://faucet-app-pi.vercel.app/",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
}
