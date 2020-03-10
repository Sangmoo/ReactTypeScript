/**
 * npx create-react-app ts-tutorial --typescript 으로 tsx 프로젝트 생성
 * --typescript 가 있으면 타입스크립트 설정이 적용된 프로젝트가 생성
 */
// /* eslint-disable */ 추가하면 eslint 에러 무시하고 실행
import React from "react";
import ReducerSample from "./ReducerSample";

function App() {
  return <ReducerSample />;
}

export default App;
