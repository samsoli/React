import React from "react";
import './App.css'
import User from "./users/User";

export default class App extends React.Component() {
  constructor(props) {
    super(props)
    this.state = {
      user: [
        { id: 1, name: 'Ali' },
        { id: 2, name: 'Alii' },
        { id: 3, name: 'Aliii' },
        { id: 4, name: 'Aliiii' },
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <User {...this.state.user[0]} />
        <User {...this.state.user[1]} />
        <User {...this.state.user[2]} />
        <User {...this.state.user[3]} />

      </div>
    )
  }
}

