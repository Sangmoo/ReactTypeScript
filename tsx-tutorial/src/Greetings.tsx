import React from "react";

// Props 에 대한 타입을 선언 할 땐 interface 또는 type 을 사용하면 되며, 프로젝트 내부에서 일관성만 지키면 된다.
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 컴포넌트의 props 중에서 생략해도 되는 값이 있다면 ? 문자를 사용
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!"
};

export default Greetings;
