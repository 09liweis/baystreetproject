import React, { Component } from "react";
import ReactDOM from "react-dom";
import Prop from './components/Prop.jsx';
import {getPrice} from './util.js'
var markers = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      list:[],
      loading:false,
      filters:{search:''}
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    this.fitBound = true;
    this.setState({loading:true});
    this.setMap();
  }
  getProps() {
    const bnds = this.map.getBounds();
    const ne = bnds.getNorthEast()
    const sw = bnds.getSouthWest()
    const bbox = [sw.toArray()[0],sw.toArray()[1],ne.toArray()[0],ne.toArray()[1]]
    let {filters} = this.state;
    filters.bbox = bbox;
    fetch('/api/prop',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(filters)
    })
    .then(res=>res.json())
    .then(ret=>{
      if (ret.length > 0) {
        this.setMarkers(ret);
        this.setState({list:ret,loading:false});
      } else {
        this.clearMarkers();
        this.setState({list:[],loading:false});
      }
    })
  }
  clearMarkers() {
    markers.forEach((marker) => marker.remove());
    markers = [];
  }
  setMarkers(props) {
    this.clearMarkers();
    let bounds = new mapboxgl.LngLatBounds();
    for (let i in props) {
      let p = props[i]
      var pos = [p.lng,p.lat];
      let el = document.createElement('div');
      el.className = 'marker';
      el.setAttribute('id', p.sid);
      el.innerHTML = getPrice(p);
      var marker = new mapboxgl.Marker(el)
      .setLngLat(pos)
      .addTo(this.map);
      bounds.extend(pos);
      markers.push(marker);
    }
    if (this.fitBound){
      this.map.fitBounds(bounds)
    }
  }
  setMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtbGl3ZWlzZW4iLCJhIjoiY2p3YjBqaWlrMDZvajN5bzIycmxjeWxucCJ9.t9ETmxK0LPiprUL8L_3Ocw';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-79.8943043333333, 43.495693], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
    this.map.on('dragend',(e)=>{
      this.fitBound = false;
      this.getProps();
    });
    this.map.on('zoomend',(e)=>{
      this.fitBound = false;
      this.getProps();
    })
    this.getProps();
  }
  handleSearch(e) {
    const val = e.target.value;
    let {filters} = this.state;
    filters.search = val;
    this.setState({
      filters
    });
    if (val.trim() == '') {
      return;
    }
    if (this.timer) {
      clearTimeout(this.timer);
      delete this.timer;
    }
    this.timer = setTimeout(()=>{
      this.fitBound = true;
      this.getProps();
    },1000)
  }
  render() {
    const {loading,list,filters} = this.state;
    let propsView = list.map((p)=>{
      return (
        <Prop key={p.sid} p={p}/>
      )
    })
    return (
      <div className="container">
        <div className="mapContainer">
          <div className="filterContainer">
            <input className="search" placeholder="Search address" value={filters.search} onChange={this.handleSearch} />
          </div>
          <div id="map"></div>
        </div>
        <div className="propList">
          {loading?'Loading':propsView}
        </div>
      </div>
    );
  }
}
export default App;