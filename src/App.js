import "./main.css";

import React, { Component, } from 'react';

class main extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
    this.interval = null;
  }

  timer = () => {
    let num = this.state.num;
    if (num > 0) {
      this.setState({ num: num - 1 })
    }
    else {
      this.setState({num:0})
    }
  };

  getnum = () => {
    this.setState({ num: document.getElementById('input').value });
    this.interval = setInterval(this.timer, 1000);
    document.getElementById('input').value=null;
  }

  componentDidUpdate() {
    if (this.state.num === 0) {
      clearInterval(this.interval)
    }

  }
  render() {
    return (
      <div id="parent">
        <div className="main">
          <div className="show">{this.state.num}</div>
          <input type="number" id="input" className="input" placeholder="Enter Number"></input>
          <button onClick={this.getnum} className="btn">submit</button>
        </div>
      </div>
    );
  }
}

export default main;




