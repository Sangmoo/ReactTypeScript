/**
 * useState Hook 사용
 */
import React, { useState } from "react";

function Counter() {
  // const [count, setCount] = useState<number>(0); // 타입 명시
  const [count, setCount] = useState(0); // Generics를 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없다.
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
