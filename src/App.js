import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Welcome to Fullstack Development - I',
      programmingWeek: 'React JS Programming Week09 Lab exercise',
      studentId: '101241704',
      studentName: 'Ibrahim Elmi',
      college: 'George Brown College, Toronto',
    };
  }

  render() {
    const {
      welcomeMessage,
      programmingWeek,
      studentId,
      studentName,
      college,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>{welcomeMessage}</h1>
          <p>{programmingWeek}</p>
          <p>{studentId}</p>
          <p>{studentName}</p>
          <p>{college}</p>
        </header>
      </div>
    );
  }
}

export default App;
