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
    let img,feat;
    if (p.photos.length > 0) {
      img = p.photos[0];
    }
    if (p.feat) {
      feat = p.feat.map((f)=>
        <span key={f} className="propFeat">{f}</span>
      );
    }
    return (
      <div className="prop" onClick={this.gotoProp.bind(this)}>
        <div className="propImg" style={{'backgroundImage':'url('+img+')'}}>
          <div className="propFeats">{feat}</div>
          {p.dom?<div className="propDom">DOM: {p.dom}</div>:null}
        </div>
        <div className="propInfo">
          <div className="propAddr">{p.addr} {p.city} {p.prov} {p.zip} {p.cnty}</div>
          <span className="propPrice">{getPrice(p)}</span>
        </div>
      </div>
    );
  }
}
export default Prop;