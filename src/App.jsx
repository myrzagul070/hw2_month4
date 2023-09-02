import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRedSquareActive: true,
    };
  }

  handleSquareClick = () => {
    this.setState((prevState) => ({
      isRedSquareActive: !prevState.isRedSquareActive,
    }));
  };

  render() {
    const { isRedSquareActive } = this.state;

    return (
      <div>
        <div
          className={`square ${isRedSquareActive ? 'red' : 'blue'}`}
          onClick={this.handleSquareClick}
        ></div>
        <div
          className={`square ${isRedSquareActive ? 'blue' : 'red'}`}
          onClick={this.handleSquareClick}
        ></div>
      </div>
    );
  }
}

export default Square;