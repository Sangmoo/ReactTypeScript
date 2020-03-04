import React from 'react';
import './App.css';
import Profile from './01/PropsComponent';
import ChildComponent from './01/ChildComponent';

class App extends React.Component {
  render() {
    const array = [2, 27, 5];
    const obj = { name: '상무', age: 28 };
    return (
      <div>
        <Profile name="상무" job="프로그래머" />{' '}
        {/* name과 job 인터페이스를 사용하기때문에, name과 job에 데이터 입력해야 실행 가능 */}
        <ChildComponent boolValue={true} numValue={7} arrayValue={array} objValue={obj} />
      </div>
    );
  }
}

export default App;
