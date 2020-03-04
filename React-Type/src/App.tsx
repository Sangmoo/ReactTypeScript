import React from 'react';
import './App.css';
import Profile from './01/PropsComponent';
import Counter from './01/Counter';

class App extends React.Component {
  render() {
    const array = [2, 27, 5];
    const obj = { name: '상무', age: 28 };
    return (
      <div>
        {/* name과 job 인터페이스를 사용하기때문에, name과 job에 데이터 입력해야 실행 가능 */}
        <Profile name="상무" job="프로그래머" />
        <Counter />
      </div>
    );
  }
}

export default App;
