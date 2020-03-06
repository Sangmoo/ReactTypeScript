/**
 * 컴포넌트가 아니라 ts로 생성
 * 액션 타입, 액션 생성 함수, 리듀서를 한 파일에 작성
 */
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
};

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export default handleActions<CounterState>(
  {
    [INCREMENT]: state => ({ value: state.value + 1 }),
    [DECREMENT]: state => ({ value: state.value - 1 }),
  },
  initialState,
);
