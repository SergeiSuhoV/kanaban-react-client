import React from "react";
import "./Avatar.scss";

function Avatar({ name = "?", urlImage = null, alt = "images" }) {
  return (
    <div className="avatar">
      {urlImage ? <img src={urlImage} alt={alt} /> : <p>{name}</p>}
    </div>
  );
}

export default Avatar;
