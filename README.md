# Story测试网领水脚本
网址：
https://faucet-app-pi.vercel.app/

使用本地redis存储领水的账号，端口6379

## 使用方法
本地安装redis

本地安装python

安装python依赖

``pip install -r requirements.txt``

去网站获取cookie，替换文件中的cookie字符串

领水运行``python faucet.py``

归集前先修改env文件中的to_address

归集运行``python transfer_ip.py``

## 存在问题
- 领水接口要经过fiddler代理(本地端口8888)才能返回200，否则会403，暂时不知道为什么。。。
- cookie暂不支持自动生成，如果失效了需要手动更新
- 领水现在页面显示成功但是并不会到账，等待官方修复


## 特别声明

- 本项目内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。
- 编写本项目主要目的为学习和研究爬虫，无法保证项目内容的合法性、准确性、完整性和有效性。
- 本项目涉及的数据由使用的个人或组织自行填写，本项目不对数据内容负责，包括但不限于数据的真实性、准确性、合法性。使用本项目所造成的一切后果，与本项目的所有贡献者无关，由使用的个人或组织完全承担。
- 本项目中涉及的第三方硬件、软件等，与本项目没有任何直接或间接的关系。本项目仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本项目无关。
- 本项目中所有内容只供学习和研究使用，不得将本项目中任何内容用于违反国家/地区/组织等的法律法规或相关规定的其他用途。
- 所有基于本项目源代码，进行的任何修改，为其他个人或组织的自发行为，与本项目没有任何直接或间接的关系，所造成的一切后果亦与本项目无关。
- 所有直接或间接使用本项目的个人和组织，应24小时内完成学习和研究，并及时删除本项目中的所有内容。如对本项目的功能有需求，应自行开发相关功能。
- 本项目保留随时对免责声明进行补充或更改的权利，直接或间接使用本项目内容的个人或组织，视为接受本项目的特别声明。
