import * as React from 'react';
import { observer }  from 'mobx-react'
import TodoList from './components/TodoList/store';
import './App.less';

// interface IAppProps {

// }

@observer
class TimerView extends React.Component {

  public handleClick = () => {
    TodoList.push();
  }

  public render() {
        return (
            <button onClick={this.handleClick}>
                Seconds passed: {TodoList.todos.length} 
                total: {TodoList.allIdCount}
            </button>
        );
    }
};

const App: React.SFC = (): JSX.Element => {
  return (
    <div className="App">
      data:{TodoList.todos.length}
      <TimerView />
    </div>
  )
}

export default App;
