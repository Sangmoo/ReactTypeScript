/**
 * TodoForm 에서 새 항목을 등록하는 작업
 * useTodosDispatch Hook 을 통해 dispatch 함수를 받아오고, 액션을 디스패치
 */
import React, { useState } from "react";
import { useTodosDispatch } from "../contexts/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      // 액션의 type 이 자동완성, 타입 검사를 통해 오류 확인 가능
      type: "CREATE",
      text: value
    });
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={e => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
