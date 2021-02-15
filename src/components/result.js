import React, { Component } from "react";

export default class result extends Component {
  render() {
    var { defaultColor, defaultSize } = this.props;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color : {defaultColor} - Fontsize : {defaultSize}px</p>
        <div id="content" style={{"color": defaultColor, "fontSize": defaultSize}} >Nội dung setting</div>
      </div>
    );
  }
}
