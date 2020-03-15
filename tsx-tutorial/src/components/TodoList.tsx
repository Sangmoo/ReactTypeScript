/**
 * TodoList 컴포넌트에서 Context 안의 상태를 조회하여 내용을 렌더링
 * 커스텀 Hook을 만들었기 때문에 간단하게 처리
 */
import React from "react";
import TodoItem from "./TodoItem";
import { useTodosState } from "../contexts/TodosContext";

function TodoList() {
  // useTodosState 를 불러와서 호출하기만 하면 현재 상태를 조회 가능
  const todos = useTodosState();
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
