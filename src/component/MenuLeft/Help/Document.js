import React, {Component} from "react";

import "../common.css";

class Document extends Component {
  handleClick = () => {
    const w = window.open("about:blank");
    w.location.href = "https://aizhuanqian.online/mardown2html";
  };

  render() {
    return (
      <div id="nice-menu-document" className="nice-menu-item" onClick={this.handleClick}>
        <span>
          <span className="nice-menu-flag" />
          <span className="nice-menu-name">更多文档</span>
        </span>
      </div>
    );
  }
}

export default Document;
