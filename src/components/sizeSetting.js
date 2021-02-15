import React, { Component } from "react";

export default class sizeSetting extends Component {
  setSizeDefault = (value) => {
    this.props.setSizeDefault(value);
  }

  onReset = () => {
    this.props.onReset();
  }

  render() {
    var { defaultSize } = this.props;

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-warning mb-2">
          <div className="panel-heading">
            <h3 className="panel-title">Size : {defaultSize}px</h3>
          </div>
          <div className="panel-body">
            <button type="button" className="btn btn-success" onClick={() => this.setSizeDefault(-2)}>
              Giảm
            </button>
            &nbsp;
            <button type="button" className="btn btn-success" onClick={() => this.setSizeDefault(2)}>
              Tăng
            </button>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.onReset}>
          reset
        </button>
      </div>
    );
  }
}
