/**
 * npx create-react-app ts-tutorial --typescript 으로 tsx 프로젝트 생성
 * --typescript 가 있으면 타입스크립트 설정이 적용된 프로젝트가 생성
 */
// /* eslint-disable */ 추가하면 eslint 에러 무시하고 실행
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
