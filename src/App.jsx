import React, { Component } from "react";
import ReactDOM from "react-dom";
import Prop from './components/Prop.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      list:[],
      loading:false,
      markers:[]
    };
  }
  componentDidMount() {
    this.setMap();
    this.setState({loading:true});
    fetch('/api/prop')
    .then(res=>res.json())
    .then(ret=>{
      this.setMarkers(ret);
      this.setState({list:ret,loading:false})
    })
  }
  setMarkers(props) {
    let bounds = new mapboxgl.LngLatBounds();
    let markers = [];
    for (let i in props) {
      let p = props[i]
      var pos = [p.lng,p.lat];
      let el = document.createElement('div');
      el.className = 'marker';
      el.setAttribute('id', p.sid);
      el.innerHTML = p.lp;
      var marker = new mapboxgl.Marker(el)
      .setLngLat(pos)
      .addTo(this.map);
      bounds.extend(pos);
      markers.push(marker);
    }
    this.map.fitBounds(bounds)
    this.setState({markers});
  }
  setMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtbGl3ZWlzZW4iLCJhIjoiY2p3YjBqaWlrMDZvajN5bzIycmxjeWxucCJ9.t9ETmxK0LPiprUL8L_3Ocw';
      this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-79.8943043333333, 43.495693], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }
  render() {
    const {loading,list} = this.state;
    let propsView = list.map((p)=>{
      return (
        <Prop key={p.sid} p={p}/>
      )
    })
    return (
      <div className="container">
        <div id="map"></div>
        <div className="propList">
          {loading?'Loading':propsView}
        </div>
      </div>
    );
  }
}
export default App;