/**
 * TodoItem 에서 항목을 클릭했을 때 액션을 취하는 기능
 * 컴포넌트 내부에서 바로 액션을 디스패치
 * 컨텍스트를 사용하지 않는다면 onToggle, onRemove props 를 가져와서 이를 호출하는 형태로 구현해야 한다
 */
import React from "react";
import "./TodoItem.css";
import { useTodosDispatch, Todo } from "../contexts/TodosContext";

type TodoItemProps = {
  todo: Todo; // TodoContext 에서 선언했던 타입을 불러왔습니다.
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id
    });
  };

  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
