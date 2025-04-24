import { useState, useEffect } from "react"
import VideoDownload from "./components/video-download/video-download"  

function IndexPopup() {
  const [url, setUrl] = useState("")
  const [domain , setDomain ] = useState("")
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    setUrl(tabs[0].url || "無資料")
    setDomain( new URL(tabs[0].url).hostname || "無資料")
  })
  
  return (
    <div >
      <VideoDownload url={url} />
      <h1>當前瀏覽的網站：{url}</h1>
      <h1>網域：{domain}</h1>
    </div>
  )
}

export default IndexPopup
