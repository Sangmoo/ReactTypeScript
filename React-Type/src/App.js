import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodaysPlan from './01/TodaysPlan';

/*
 * Defalut Setting
 */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/**
 * npm start로 시작
 * localhost:3000으로 페이지 연결
 * 핫 리로딩(Hot Reloading) 기능으로 저장한즉시 화면 변경
 **/

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan /> {/** TodayPlan 컴포넌트 활용 */}
      </div>
    );
  }
}

export default App;
