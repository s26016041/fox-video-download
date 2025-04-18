chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "get-current-tab-url") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({ url: tabs[0]?.url })
    })
    return true // 讓 async 回傳有效
  }
})