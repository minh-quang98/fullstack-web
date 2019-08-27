import React from 'react';
import './App.css';
import TodoList from "./Todolist"

class App extends React.Component{

  // constructor() {
  //   super()
  //   this.state = {
  //     // counting: 0
  //     // value: ""
  //     visible: true
  //   }
  // }

  // increase = () => {
  //   this.setState({counting: this.state.counting + 1})
  // }

  // onChange = (event) => {
  //   this.setState({
  //     value: event.target.value
  //   })
  // }

  // onClick = () => {
  //   this.setState({
  //     visible: !this.state.visible
  //   })
  // }

  render() {
    return (
      <div className="App">
        {/* <p>Number of click: {this.state.counting}</p>
        <button onClick={this.increase}>Click me</button> */}

        {/* <input type="text" value={this.state.value} onChange={this.onChange}></input>
        <input type="text" value={this.state.value}></input> */}

        {/* <p style={{display: this.state.visible ? "" : "none"}}>Hide me!</p> */}
        {/* {this.state.visible ? <p>Hide me!</p> : null}
        <button onClick={this.onClick}>Click me to toggle</button> */}

        <TodoList />
      </div>
    );
  }
}



export default App;
