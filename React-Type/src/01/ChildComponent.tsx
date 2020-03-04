import React from 'react';
//import PropTypes from 'prop-types';

interface Props {
  boolValue: boolean;
  numValue: number;
  arrayValue: Array<number>;
  objValue: object;
}

class ChildComponent extends React.Component<Props> {
  render() {
    const { boolValue, numValue, arrayValue, objValue } = this.props;
    return (
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={[1, 2, 3]}
        objValue={{ name: '이름', age: 28 }}
      />
    );
  }
}

export default ChildComponent;
