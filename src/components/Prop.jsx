import React, { Component } from "react";
import ReactDOM from "react-dom";
import {getPrice} from '../util.js';
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
        <div>{p.addr}</div>
        <span>{getPrice(p)}</span>
      </div>
    );
  }
}
export default Prop;