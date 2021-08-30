import React from "react";

export default function Language({ value: { icon, language, level } }) {
const barWidth= `${level}%`

  return (
    <div className="col-lg-6 bar_main">
      <div className="bar">
        <div className="bar_wrapper" style={{width:barWidth}}>
          <span>
              <img src={icon} alt="icon" className="bar_icon"></img>
              <span className="bar_name">
              {language}
              </span>

          </span>
        </div>
      </div>
    </div>
  );
}
