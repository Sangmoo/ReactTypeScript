import { createContext, Dispatch } from "react";

// 나중에 다른 컴포넌트에서 타입을 불러와서 쓸 수 있도록 내보낸다.
// Context 를 만들땐 위 코드와 같이 createContext 함수의 Generics 를 사용하여 Context에서 관리 할 값의 상태를 설정해줄 수 있다.
// 추후 Provider를 사용하지 않았을 때에는 Context의 값이 undefined 가 되어야 하므로,
// <TodosState | undefined> 와 같이 Context 의 값이 TodosState 일 수도 있고 undefined 일 수도 있다고 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);

// 액션들의 타입을 선언해주고 나면, 우리가 디스패치를 위한 Context를 만들 때 디스패치 함수의 타입을 설정 할 수 있다
type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

// 리듀서
function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false
      });
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error("Unhandled action");
  }
}
