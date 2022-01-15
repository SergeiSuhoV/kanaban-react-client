import React from "react";
import ExpandCollapse from "./ExpandCollapse";
import "./Sticker.scss";
import StickerMini from "./StickerMini";

function Sticker() {
  return <div className="sticker">
    <div className="sticker__mini">Sticker mini
    <StickerMini />
    </div>
    <div className="sticker__container">CONTAINER</div>
    <ExpandCollapse />
  </div>;
}

export default Sticker;
