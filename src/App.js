import React, { Component } from "react";
import ColorPicker from "./components/colorPicker";
import Result from "./components/result";
import SizeSetting from "./components/sizeSetting";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultColor: "black",
      defaultSize: 16,
    };
  }

  setDefaultColor = (newColor) => {
    this.setState({
      defaultColor: newColor,
    });
  };

  setSizeDefault = (value) => {
    if (
      this.state.defaultSize + value >= 8 &&
      this.state.defaultSize + value <= 32
    ) {
      this.setState({
        defaultSize: this.state.defaultSize + value,
      });
    }
  };

  onReset = () => {
    this.setState({
      defaultColor: "black",
      defaultSize: 16,
    });
  };

  render() {
    var { defaultColor, defaultSize } = this.state;

    return (
      <div className="container mt-5">
        <div className="row">
          <ColorPicker
            defaultColor={defaultColor}
            setDefaultColor={this.setDefaultColor}
          />
          <SizeSetting
            defaultSize={defaultSize}
            setSizeDefault={this.setSizeDefault}
            onReset={this.onReset}
          />
          <Result defaultColor={defaultColor} defaultSize={defaultSize} />
        </div>
      </div>
    );
  }
}
