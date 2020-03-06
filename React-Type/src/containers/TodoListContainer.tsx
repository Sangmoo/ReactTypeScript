/**
 * 해당 모듈에서 사용하던 TodoItemData 를, 컴포넌트의 Props 에 받아오게 되니, 액션 생성함수들을 불러올 때 함께 TodoItemDate 타입도 불러와서 사용
 */
import * as React from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { TodoItemData, actionCreators as todosActions } from '../store/modules/todos';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';

interface Props {
  todoItems: List<TodoItemData>;
  input: string;
  TodosActions: typeof todosActions;
}

class TodoListContainer extends React.Component<Props> {
  onCreate = () => {
    const { TodosActions, input } = this.props;
    TodosActions.create(input);
  };
  onRemove = (id: number) => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  };
  onToggle = (id: number) => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  };
  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const { TodosActions } = this.props;
    TodosActions.changeInput(value);
  };
  render() {
    const { input, todoItems } = this.props;
    const { onCreate, onRemove, onToggle, onChange } = this;

    return (
      <TodoList
        input={input}
        todoItems={todoItems}
        onCreate={onCreate}
        onRemove={onRemove}
        onToggle={onToggle}
        onChange={onChange}
      />
    );
  }
}

export default connect(
  ({ todos }: StoreState) => ({
    input: todos.input,
    todoItems: todos.todoItems,
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch),
  }),
)(TodoListContainer);
