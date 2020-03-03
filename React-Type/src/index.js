// 필수 리액트 구동 모듈
import React from 'react';
import ReactDOM from 'react-dom';
// 초기 화면을 구성하는 사용자 코드
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 리액트 엔진이 화면을 출력하는 코드
// id가 root인 엘리먼트에 컴포넌트를 출력
ReactDOM.render(<App />, document.getElementById('root'));

// 서비스워커 구동 코드로 오프라인 모드로 작동하는 데 도움이 되는 모듈
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
