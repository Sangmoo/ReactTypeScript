/**
 * as const는 const assertions라는 TypeScript 문법
 * 이 문법을 사용하면 우리가 추후 액션 생성함수를 통해 액션 객체를 만들게 됐을 때 type의 TypeScript 타입이 string이 되지 않고 실제값을 가르키게 된다
 *
 */
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

/**
 *  따로 파라미터를 받아오지 않는다
 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

/**
 * 액션들의 TypeScript 타입을 준비
 */
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

/**
 * 리덕스 상태의 타입을 선언 할 때에는 type을 써도 되고 interface를 써도 된다
 * 둘 중에 하나만 선택 해서 앞으로 일관성 있게 계속 하나만 사용하시는 것을 권장
 */
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

/**
 * 리듀서 작성
 * 함수의 반환 타입에 상태의 타입을 넣는 것을 잊으면 안된다
 */
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
