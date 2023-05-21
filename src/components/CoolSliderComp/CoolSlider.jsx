import React, { useState } from "react";
import "./CoolSlider.css";
import img1 from "./i1.jpg";
import img2 from "./image1.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useEffect } from "react";
const slidesarr = [img1, img2, img2, img2];
const CoolSlider = ({setWidth,setHeight}) => {
  const [state, setState] = useState(1);

  useEffect(() => {
    let tid = setTimeout(() => {
      if (state == slidesarr.length) {
        setState(1);
      } else {
        setState(state + 1);
      }
    }, 2000);
    return () => {
   
      clearTimeout(tid);
    };
  });

  return (
    <div className="main-cool">
      <div className="main-CoolSlider"  style={{width:setWidth,height:setHeight}}>
        <div
          className="CoolSlider"
          style={{
            transform: `translateX(${
              -(state - 1) * (100 / slidesarr.length)
            }%)`,
          }}
        >
          {slidesarr.map((v, index) => {
            return (
              <div className="CoolSlider-slide">
                <img src={v} alt="" style={{width:setWidth}} />
              </div>
            );
          })}
        </div>
        <button
          className="CoolSlider-btn leftbtn"
          onClick={() =>
            state == 1 ? setState(slidesarr.length) : setState(state - 1)
          }
        >
          <FcPrevious />
        </button>
        <button
          className="CoolSlider-btn rightbtn"
          onClick={() =>
            state == slidesarr.length ? setState(1) : setState(state + 1)
          }
        >
          <FcNext />
        </button>
        <div className="dots">
          {slidesarr.map((v, index) => {
            return (
              <div
                className={`${index + 1 == state ? "active-dot" : ""}   dot`}
                onClick={() => setState(index + 1)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoolSlider;
