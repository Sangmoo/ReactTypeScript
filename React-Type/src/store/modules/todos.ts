/**
 * Immutable 을 사용하게 될 때에는, Map 대신에 Record 를 사용하면 타입스크립트의 이점을 제대로 누릴 수 있다.
 * 각 액션의 Payload 또한 타입을 지정해두면, 각 액션 생성함수를 호출하거나, 혹은 리듀서에서 액션을 처리하게 될 때 큰 노력 없이도 바로 어떠한 종류의 payload 를 가진 액션인지 파악 가능
 */
import { Record, List } from 'immutable';
import { createAction, handleActions, Action } from 'redux-actions';

const CREATE = 'todos/CREATE';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

type CreatePayload = string;
type RemovePayload = number;
type TogglePayload = number;
type ChangeInputPayload = string;

/* type AnotherPayload = {
  something: string;
  like: number;
  this: boolean
}; */

export const actionCreators = {
  create: createAction<CreatePayload>(CREATE),
  remove: createAction<RemovePayload>(REMOVE),
  toggle: createAction<TogglePayload>(TOGGLE),
  changeInput: createAction<ChangeInputPayload>(CHANGE_INPUT),
};

const TodoItemRecord = Record({
  id: 0,
  text: '',
  done: false,
});

interface TodoItemDataParams {
  id?: number;
  text?: string;
  done?: boolean;
}

export class TodoItemData extends TodoItemRecord {
  static autoId = 0;
  id: number;
  text: string;
  done: boolean;
  constructor(params?: TodoItemDataParams) {
    const id = TodoItemData.autoId;
    if (params) {
      super({
        ...params,
        id,
      });
    } else {
      super({ id });
    }
    TodoItemData.autoId = id + 1;
  }
}

const TodosStateRecord = Record({
  todoItems: List(),
  input: '',
});

export class TodosState extends TodosStateRecord {
  todoItems: List<TodoItemData>;
  input: string;
}

const initialState = new TodosState();

export default handleActions<TodosState, any>(
  {
    [CREATE]: (state, action: Action<CreatePayload>): TodosState => {
      return <TodosState>state.withMutations(s => {
        s.set('input', '').update('todoItems', (todoItems: List<TodoItemData>) =>
          todoItems.push(new TodoItemData({ text: action.payload })),
        );
      });
    },
    [REMOVE]: (state, action: Action<RemovePayload>): TodosState => {
      return <TodosState>(
        state.update('todoItems', (todoItems: List<TodoItemData>) =>
          todoItems.filter(t => (t ? t.id !== action.payload : false)),
        )
      );
    },
    [TOGGLE]: (state, action: Action<TogglePayload>): TodosState => {
      const index = state.todoItems.findIndex(t => (t ? t.id === action.payload : false));
      return <TodosState>state.updateIn(['todoItems', index, 'done'], done => !done);
    },
    [CHANGE_INPUT]: (state, action: Action<ChangeInputPayload>): TodosState => {
      return <TodosState>state.set('input', action.payload);
    },
  },
  initialState,
);
