import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="https://www.ikea.com/kr/ko/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s"
        alt=""
      />
      <h2>Win</h2>
    </div>
  );
};

export default Box;
