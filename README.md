# 背景说明：
这个noss (https://noscription.org/) 声称免费挖矿，只需要一台电脑，有网即可全员参与，门槛极低，至于原理此处不展开讲述，感兴趣可自己研究，不过经过实操发现异常sb，因为每次算好随机数之后上报的时候需要跟钱包交互点击确认（用onekey钱包），这种操作重复低级无趣味，并且影响效率，因此写了这么个程序来帮助我们完成这种低端劳动，当然至于能不能挖到，还得看你的机器配置（cpu、内存）、网络速度，总之想要挖到还是有一些难度的，因为你的对手是其他更牛叉的配置，自我感觉... 祝你们好运
# 使用说明
- 1. 安装依赖软件：node.js 、chrome浏览器
- 2. 下载代码
- 3. cd noss
- 4. node ./autoClick.js (mac电脑) 或者 node ./autoClick-win.js(windows 电脑) 【这步操作尽量在退出chrome浏览器的情况下进行】
- 5. 在启动的浏览器中安装onekey钱包扩展，并创建好钱包（建议用新钱包）
- 6. 在第4步启动的浏览器中自动会打开https://noscription.org, 刷新页面提示连接钱包，进行连接
- 7. 强制退出浏览器
- 8. 重复步骤4
- 9. 在https://noscription.org 页面点mint按钮设置并开始挖矿，第一次弹窗输入钱包解锁密码之后，后续就不用管了，只要弹出确认框，程序会自动帮你点击确认
# 注意：
现在可以使用钱包中的自动确认功能了，这个脚本基本上没啥竞争力了，比如可以使用tp钱包
