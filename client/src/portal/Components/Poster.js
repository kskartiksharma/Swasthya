import React from "react";
import video1 from "../videos/swass .mp4";
// import background from "../images/homeBg.png";

export default function Poster() {
  return (
    <div className="parentdiv">
      <div className="firstChilddiv" >
        <video src={video1} width="100%" height="100%" autoplay="true" muted = "true" style={{boxSizing:"border-box"}}/>
        {/* <img src={GIF} alt="" width="75%" height="600" className="m-auto"style={{display:"flex"}}/> */}
      </div>
      <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <div
            class="wave waveTop"
            style={{backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-top.png')`}}
          >
            
          </div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div
            class="wave waveMiddle"
            style={{backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')`}}
          ></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div
            class="wave waveBottom"
            style={{backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')`}}
          ></div>
        </div>
      </div>
    </div>
    
  );
}
