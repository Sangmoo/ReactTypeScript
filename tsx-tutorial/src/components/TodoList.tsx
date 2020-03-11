/**
 * todos 라는 배열을 사용하여 여러개의 TodoItems 컴포넌트를 렌더링해주는 작업
 */
import React from "react";
import TodoItem from "./TodoItem";

// 배열에 대한 상태가 존재하지 않으므로 이 배열을 임시적으로 TodoList 컴포넌트 내부에서 선언
function TodoList() {
  const todos = [
    {
      id: 1,
      text: "Context API 배우기",
      done: true
    },
    {
      id: 2,
      text: "TypeScript 배우기",
      done: true
    },
    {
      id: 3,
      text: "TypeScript 와 Context API 함께 사용하기",
      done: false
    }
  ];
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
