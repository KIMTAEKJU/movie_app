import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Movie />
         <Movie />
         <Movie />
         <Movie />
         <Movie />
         <Movie />
      </div>
      //<React.Fragment>
        // <Movie />
        // <Movie />
        // <Movie />
        // <Movie />
        // <Movie />
        // <Movie />
      //</React.Fragment>


      // <div className="App">
      //   <h1>hello world</h1>
      // </div>
    );
  }
}

export default App;
