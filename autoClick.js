const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function () {
  const profilePath = path.join(process.env.HOME, 'Library/Application Support/Google/Chrome/Profile 1');
  const options = new chrome.Options().addArguments(`--user-data-dir=${profilePath}`);

  const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  try {
    await driver.get('https://noscription.org/');  // 打开扩展可能触发弹窗的页面

    while (true) {
      // 等待弹窗出现
      await driver.wait(async function () {
        const handles = await driver.getAllWindowHandles();
        return handles.length > 1;
      });

      // 获取所有窗口句柄
      const handles = await driver.getAllWindowHandles();

      for (let i = 1; i < handles.length; i++) {
        // 切换到当前新窗口
        await driver.switchTo().window(handles[i]);

        try {
          const confirmButtons = await driver.findElements(By.xpath('//div[contains(text(), "确认")]'));

          // console.log("confirmButtons:---------")
          // console.log(confirmButtons)
          if (confirmButtons.length > 0) {
            await confirmButtons[0].click();
          }

        } catch (error) {
          // console.error("发生错误1:", error);
        }

        // 切换回原始窗口
        await driver.switchTo().window(handles[0]);
      }

    }
  } catch (error) {
    console.error("发生错误2:", error);
    // 处理错误情况，例如记录日志，或执行其他操作
  } finally {
    await driver.quit();
  }
})();
