import React from "react";
import "./ProductReview.css";
const ProductReview = ({ reviewArr }) => {
  return (
    <div className="ProReview">
      {reviewArr.map((val,id) => {
        return (
          <div className="pro1" key={id}>
            <img src={val.image} alt="" />
          
            <div>  <h6>{val.review}</h6>
              <div className="desc">
                <span>{val.name}</span>
                <span>{val.price}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductReview;
