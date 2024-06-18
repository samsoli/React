import React from "react";
import './App.css'
import User from "./users/User";

export default class App extends React.Component() {
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
  }

  render() {
    return (
      <div >
        <User {...this.state.users[0]} />
        <User {...this.state.users[1]} />
        <User {...this.state.users[2]} />
        <User {...this.state.users[3]} />

      </div>
    )
  }
}

