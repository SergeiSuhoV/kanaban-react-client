import React from "react";
import Avatar from "./Avatar";
import ButtonEllipsis from "./ButtonEllipsis";
import "./TeamOnline.scss";

function TeamOnline() {
  return (
    <div className="team-online">
      <ButtonEllipsis />
      <wrapper className="team-online__avatar">
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      </wrapper>
      <wrapper className="team-online__avatar">
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      </wrapper>
      <wrapper className="team-online__avatar">
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      </wrapper>
      <wrapper className="team-online__avatar">
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      </wrapper>
      <wrapper className="team-online__avatar">
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      </wrapper>
      <wrapper className="team-online__avatar">
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      </wrapper>
      <wrapper className="team-online__avatar">
      <Avatar urlImage={"/images/test-ava-otlishno.jpg"} />
      </wrapper>
    </div>
  );
}

export default TeamOnline;
