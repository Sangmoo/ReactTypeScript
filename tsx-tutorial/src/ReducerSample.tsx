/**
 *  Action 이라는 타입스크립트 타입을 정의함으로써 리듀서에서 자동완성이 되어 개발에 편의성을 더해주고
 *  , 액션을 디스패치하게 될 때에도 액션에 대한 타입검사가 이루어지므로 사소한 실수를 사전에 방지
 */
import React, { useReducer } from "react";

type Color = "red" | "orange" | "yellow";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count // count가 자동완성되며, number 타입인걸 알 수 있습니다.
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text // text가 자동완성되며, string 타입인걸 알 수 있습니다.
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood
      };
    default:
      throw new Error("Unhandled action");
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true
  });

  const setCount = () => dispatch({ type: "SET_COUNT", count: 7 }); // count 를 넣지 않으면 에러발생
  const setText = () => dispatch({ type: "SET_TEXT", text: "bye" }); // text 를 넣지 않으면 에러 발생
  const setColor = () => dispatch({ type: "SET_COLOR", color: "red" }); // red 를 넣지 않으면 에러 발생
  const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? "true" : "false"}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
