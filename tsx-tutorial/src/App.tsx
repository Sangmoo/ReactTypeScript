/**
 * npx create-react-app ts-tutorial --typescript 으로 tsx 프로젝트 생성
 * --typescript 가 있으면 타입스크립트 설정이 적용된 프로젝트가 생성
 */
import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="Hello" onClick={onClick} />; // onClick 이라는 변수가 있어야 작동, type이나 interface 사용 시 props는 지켜줘야한다.
  <Counter />;
}

export default App;
