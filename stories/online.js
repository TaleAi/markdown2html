import React from "react";
import MarkdownNice from "../lib/Lib";

// 编辑器默认的内容
const defaultText = `编辑器默认的内容`;
// 标题，是一个字符串
const defaultTitle = "Markdown Nice";

// 自定义图床参数
const useImageHosting = {
  url: "https://imgkr.com/api/files/upload",
  name: "图壳"
};

function App() {
  return (
    <MarkdownNice
      defaultTitle={defaultTitle}
      defaultText={defaultText}
      onTextChange={t => console.log("text => ", t)}
      onTextBlur={t => console.log("text => ", t)}
      onStyleChange={t => console.log("text => ", t)}
      onStyleBlur={t => console.log("text => ", t)}
      token="12345"
      useImageHosting={useImageHosting}
    />
  );
}

export default App;