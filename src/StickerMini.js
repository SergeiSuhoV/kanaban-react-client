import React from "react";
import "./StickerMini.scss";

function StickerMini() {
  return (
    <div className="sticker-mini">
      <div className="sticker-mini__title">Title task</div>
      <div className="sticker-mini__wrapper">
        <div className="sticker-mini__author">Ilon Maks</div>
        <div className="sticker-mini__data-created">icon 2022г. 3 jan. MO</div>
        <div className="sticker-mini__color-stick" />
      </div>
    </div>
  );
}

export default StickerMini;
