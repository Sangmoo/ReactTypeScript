import React from 'react';
//import PropTypes from 'prop-types';

/**
 * 어느 Prop을 받을 지 미리 할당
 */
interface Props {
  name: string;
  job: string;
}

class PropsComponent extends React.Component<Props> {
  // Props Interface 사용
  render() {
    const { name, job } = this.props; // name에 props 할당
    return (
      <div>
        <h1>프로필</h1>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>직업: </b>
          {job}
        </div>
      </div>
    );
  }
}

export default PropsComponent;
