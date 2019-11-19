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
      feat = [...new Set(p.feat)];
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
          <span className="propPrice">{getPrice(p)}</span>
          <div className="propRms">
            <span className="propRm">
              <i className="fas fa-bed"></i>
              <b>{p.bdrms || 0}</b>
            </span>
            <span className="propRm">
              <i className="fas fa-shower"></i>
              <b>{p.bthrms || 0}</b>
            </span>
            <span className="propRm">
              <i className="fas fa-parking"></i>
              <b>{p.gr || 0}</b>
            </span>
            <span className="propRm">
              <i className="fas fa-blender"></i>
              <b>{p.kch || 0}</b>
            </span>
          </div>
          <div className="propAddr">{p.crsst} ({p.cmty})</div>
        </div>
      </div>
    );
  }
}
export default Prop;