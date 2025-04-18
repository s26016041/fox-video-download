import { useState, useEffect } from "react"

function IndexPopup() {
  const [data, setData] = useState("+")
  
  chrome.runtime.sendMessage({ type: "get-current-tab-url" }, (response) => {
    setData(response.url || "無資料")
  })
  
  return (
    <div style={{ padding: 16 }}>
      <h1>當前瀏覽的網站：{data}</h1>
    </div>
  )
}

export default IndexPopup
