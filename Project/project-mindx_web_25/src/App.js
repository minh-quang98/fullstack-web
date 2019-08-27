import React from 'react';  
import Navbar from "./components/navbar"

class App extends React.Component {

  login = value => {
    console.log("Input Value Login: ", value)
  }

  register = value => {
    console.log("Input Value Register: ", value)
  }

  render() {
    return (
      <Navbar onLogin={this.login} onRegister={this.register}/>
    )
  }
}

export default App;
