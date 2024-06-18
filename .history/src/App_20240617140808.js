import React from 'react';
// import './App.css'
import User from "./users/User";

 class App extends React.Component() {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { id: 1, name: 'Ali' },
        { id: 2, name: 'Alii' },
        { id: 3, name: 'Aliii' },
        { id: 4, name: 'Aliiii' },
      ]
    }
    this.code = 25

    // setTimeout(()=>{
    //   this.setState({
    //     users: [
    //       { id: 1, name: 'sara' },
    //       { id: 2, name: 'fafa' },
    //       { id: 3, name: 'reza' },
    //       { id: 4, name: 'mila' },
    //     ]
    //   })
    // },5000);
  }

  render() {
    return (
      <div >
        <h1>{this.code}</h1>
        <User {...this.state.users[0]}/>
        <User {...this.state.users[1]}/>
        <User {...this.state.users[2]}/>
        <User {...this.state.users[3]}/>

      </div>
    )
  }
}
export default App

