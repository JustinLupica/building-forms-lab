import React, { Component } from "react";

export default class Bands extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.renderBand()}</ul>
      </div>
    );
  }
}
