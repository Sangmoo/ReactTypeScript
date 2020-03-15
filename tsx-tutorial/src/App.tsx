/**
 * 컴포넌트에서 Context 사용
 * 컴포넌트 내부에서 바로 액션을 디스패치
 */
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosContextProvider } from "./contexts/TodosContext";

function App() {
  return (
    // TodosContextProvider 를 불러와서 기존 내용을 감싸주기
    <TodosContextProvider>
      <TodoForm />
      <TodoList />
    </TodosContextProvider>
  );
}

export default App;
