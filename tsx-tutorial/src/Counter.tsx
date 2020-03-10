/**
 * useState Hook 사용
 */
// import React, { useState } from "react";

// function Counter() {
//   // const [count, setCount] = useState<number>(0); // 타입 명시
//   const [count, setCount] = useState(0); // Generics를 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없다.
//   const onIncrease = () => setCount(count + 1);
//   const onDecrease = () => setCount(count - 1);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <div>
//         <button onClick={onIncrease}>+1</button>
//         <button onClick={onDecrease}>-1</button>
//       </div>
//     </div>
//   );
// }

// export default Counter;

// useReducer 사용
import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

function reducer(state: number, action: Action): number {
  // 리듀서를 만들 땐 파라미터로 받아오는 상태의 타입과 함수가 리턴하는 타입을 동일하게 하는 것이 매우 중요 - 실수들을 방지
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

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
