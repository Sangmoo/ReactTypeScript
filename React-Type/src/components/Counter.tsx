/**
 * 기존의 Counter 컴포넌트를 프리젠테이셔널 컴포넌트로서 사용하기 위해 들고있던 State 와 메소드들을 제거
 */
import * as React from 'react';

interface Props {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

const Counter: React.SFC<Props> = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h2>카운터</h2>
    <h3>{value}</h3>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default Counter;
