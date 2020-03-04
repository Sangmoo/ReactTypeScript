import React from 'react';
import './App.css';
import TodaysPlan from './01/TodaysPlan';
import UsePC from './01/UsePC';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan /> {/** TodayPlan 컴포넌트 활용 */}
        <h1>Hello TSX!</h1>
        <UsePC />
      </div>
    );
  }
}

export default App;
