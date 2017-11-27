import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={counters:[0]}
    // this.counterList = this.state.counters.map((counter,index)=>
    //   <li key={index}>
    //     <h2>{counter}</h2>
    //     <div>
    //       <button onClick={() => this.incrementCounter(index)}>Add Counter</button>
    //       <button onClick={() => this.decrementCounter(index)}>Add Counter</button>
    //     </div>
    //   </li>
    // )
    // this.addCounter = this.addCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  //add counter
  addCounter(){
    this.setState((prevState,props)=>{
      this.state.counters.push(0)
    }, function () {
      console.log("Counter Added", this.state.counters);
      this.forceUpdate();
    })
  }

  //Increment
  incrementCounter(index){
    this.setState((prevState,props) => {
      this.state.counters[index]=this.state.counters[index]+1
    }, function () { console.log("Increment") })
  }

  //Decrement
  decrementCounter(index) {
    this.setState((prevState,props) => {
      this.state.counters[index] = this.state.counters[index] - 1
    }, function () { console.log("Decrement") })
  }

  //
  renderList(){
    this.counterList = this.state.counters.map((counter, index) => {
      <li key={index}>
        <h2>{counter}</h2>
        <div>
          <button onClick={() => this.incrementCounter(index)}>Increment</button>
          <button onClick={() => this.decrementCounter(index)}>Decrement</button>
        </div>
      </li>
    })
  }

  render() {
    this.renderList()
    return (
      <div className="App">
        <button onClick={this.addCounter.bind(this)}>Add Counter</button>
        <ul>{this.counterList}</ul>
      </div>
    );
  }
}

export default App;
