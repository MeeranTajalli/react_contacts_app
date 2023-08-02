import React from "react";
import Detail from "./Detail";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom"></div>
      <Detail detailInfo={props.tel} />
      <Detail detailInfo={props.email} />
    </div>
  );
}

export default Card;
