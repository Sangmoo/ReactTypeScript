/**
 * 컴포넌트에서 필요한 값과 함수들을 모두 props 로 받아오도록 처리
 * 3개의 버튼을 보여주는데 3번째 버튼의 경우 클릭이 되면 5를 onIncreaseBy 함수의 파라미터로 설정하여 호출
 */
import React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function Counter({ count, onIncrease, onDecrease, onIncreaseBy }: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;
