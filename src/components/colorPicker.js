import React, { Component } from "react";

export default class colorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ["black", "yellow", "blue", "orange"],
    };
  }

  setDefaultColor = (color) => {
    this.props.setDefaultColor(color);
  };

  render() {
    var { defaultColor } = this.props;
    var squareRender = this.state.colors.map((color, index) => {
      return (
        <span
          className={
            defaultColor === color
              ? "square-color square-active"
              : "square-color"
          }
          style={{ backgroundColor: color }}
          key={index}
          onClick={() => this.setDefaultColor(color)}
        ></span>
      );
    });

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            <hr />
            {squareRender}
          </div>
        </div>
      </div>
    );
  }
}
