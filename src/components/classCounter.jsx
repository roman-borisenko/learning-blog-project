import React from "react";

class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.increment = this.decrenent.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrenent() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Inkcrement</button>
        <button onClick={this.decrenent}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
