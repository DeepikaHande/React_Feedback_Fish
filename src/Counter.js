import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    return (
      <>
        <button onClick={this.handleIncrement}>+</button>
        <br />
        <span>{this.state.count}</span>
        <br />
        <button onClick={this.handleDecrement}>-</button>
      </>
    );
  }
}
