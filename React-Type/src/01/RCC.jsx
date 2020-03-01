import React, { Component } from 'react';
import './App.css';

/**
 * RCC - 기본 리액트 컴포넌트 코드를 생성
 * RCCP - 리액트 컴포넌트를 프로퍼티 타입과 함께 생성
 * RCFC - 리액트 컴포넌트를 생명주기 함수와 함께 생성
 * RPC - 리액트 퓨어 컴포넌트를 생성
 * RSC - 함수형 컴포넌트를 생성
 * RSCP - 함수형 컴포넌트를 프로퍼티 타입과 함께 생성
 */

export default class RCC extends Component {
  render() {
    var text = '테스트';
    return <div name="name">{text}</div>;
  }
}

export default RCC;
