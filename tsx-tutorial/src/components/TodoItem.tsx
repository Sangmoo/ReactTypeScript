/**
 * 할 일 항목에 대한 정보를 보여주는 컴포넌트
 * props 로는 todo 객체를 받아온다
 */
import React from "react";
import "./TodoItem.css";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
    </li>
  );
}

export default TodoItem;
