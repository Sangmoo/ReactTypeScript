/**
 * 카운터 컨테이너 컴포넌트
 * 리덕스 스토어 안에 있는 상태를 조회하여 사용하고
 * 액션도 디스패치하는 컨테이너 컴포넌트
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer() {
  // useSelector 부분에서 state 의 타입을 RootState로 지정해서 사용한다
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
