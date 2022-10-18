import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      data: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // PROSES PEMANGGILAN DATA DARI DATABASE
      this.setState({
        name: "Bagus Tri Harjanto",
        data: ["1", "2", "3"],
      });
    }, 5000);
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Counter App</h1>
        <hr />
        <h3>{this.state.name}</h3>
        <h5>{this.state.data.length}</h5> {/* menghitung total data */}
      </div>
    );
  }
}

export default Counter;
