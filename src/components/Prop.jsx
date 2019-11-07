import React, { Component } from "react";
import ReactDOM from "react-dom";
class Prop extends Component {
  constructor() {
    super();

  }
  componentDidMount() {

  }
  render() {
    const {p} = this.props;
    let img;
    if (p.photos.length > 0) {
      img = p.photos[0];
    }
    return (
      <div className="prop">
        <img className="propImg" src={img}/>
        {p.addr}
      </div>
    );
  }
}
export default Prop;