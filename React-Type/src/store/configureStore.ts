/**
 * 스토어를 생성하는 함수를 만들고, 프로젝트에 스토어를 적용
 */
import modules from './modules';
import { createStore } from 'redux';

export default function configureStore() {
  const store = createStore(
    modules /* preloadedState, */,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
