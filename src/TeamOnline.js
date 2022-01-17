import React from "react";
import Avatar from "./Avatar";
import Ellipsis from "./Ellipsis";
import "./TeamOnline.scss";

function TeamOnline() {
  return (
    <div className="team-online">
      <Ellipsis />
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
    </div>
  );
}

export default TeamOnline;
