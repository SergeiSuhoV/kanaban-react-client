import React from "react";
import "./Board.scss";
import TaskColumn from "./TaskColumn";

function Board() {
  return (
    <div className="board">
      <div className="board__wrapper">
        <div className="board__title">Gallifrey team 164x28</div>
        <div className="board__task-columns">
          <TaskColumn />
          <TaskColumn />
          <TaskColumn />
          <TaskColumn />
        </div>
      </div>
    </div>
  );
}

export default Board;
