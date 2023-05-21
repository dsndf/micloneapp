import React from "react";
import "./Vedios.css";
import play from "../play.png";
const Videos = ({ arr }) => {
  return (
    <div className="videos">
      {arr.map((v) => {
        return (
          <div
            key={v.name}
            style={{
              background: `url(${v.image}) no-repeat center center/cover`,
              width: "60%",
              height: "320px",
              margin:"10px"
              // padding: "20px",
            }}
          >
            <div style={{textAlign:"center"}}>
              <button className="playbtn" style={{textAlign:"center"}}>
                <img src={play} alt="" />
              </button>

              <p
                style={{
                  textAlign: "center",
                  color: "rgb(255 255 255 / 75%)",
                  fontFamily:
                    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;",
                    fontSize:"17px"
                    ,fontWeight:"500"
                    ,marginTop:"10px"
                }}
              >
                {v.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
