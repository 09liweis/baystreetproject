import React, { Component } from "react";
import ReactDOM from "react-dom";
import {getPrice} from '../util.js';
class Prop extends Component {
  constructor() {
    super();

  }
  gotoProp() {
    const {p} = this.props;
    let url = `/prop/${p.sid}`;
    window.open(url,'_blank');
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
      <div className="prop" onClick={this.gotoProp.bind(this)}>
        <img className="propImg" src={img}/>
        <div>{p.addr}</div>
        <span>{getPrice(p)}</span>
      </div>
    );
  }
}
export default Prop;