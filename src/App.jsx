import React, { Component } from "react";
import ReactDOM from "react-dom";
import Prop from './components/Prop.jsx';
import Loading from './components/Loading.jsx';
import {getPrice} from './util.js'
var markers = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      list:[],
      view:'map',
      loading:false,
      popup:{},
      showFilter:false,
      cities:[]
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentWillMount() {
    this.setEmptyFilter();
  }
  componentDidMount() {
    this.fitBound = true;
    this.setMap();
    this.getCities();
  }
  setEmptyFilter() {
    this.setState({filters:{search:'',ptype2:'',city:'',bdrms:'',bthrms:'',gr:''}})
  }
  getCities() {
    fetch('/api/prop/cities',{
      method:'get',
      headers: {'Content-Type':'application/json'}
    }).then(res=>res.json())
    .then(ret=>{
      this.setState({cities:ret});
    })
  }
  getProps() {
    this.setState({loading:true});
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
      el.addEventListener('click',()=>{
        this.setState({popup:p});
      }
    ); 
      var marker = new mapboxgl.Marker(el)
      .setLngLat(pos)
      .addTo(this.map);
      bounds.extend(pos);
      markers.push(marker);
    }
    if (this.fitBound){
      this.map.fitBounds(bounds)
      this.fitBound = false;
    }
  }
  setMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtbGl3ZWlzZW4iLCJhIjoiY2p3YjBqaWlrMDZvajN5bzIycmxjeWxucCJ9.t9ETmxK0LPiprUL8L_3Ocw';
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-79.3832, 43.6532], // starting position [lng, lat]
      zoom: 11 // starting zoom
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
  updateFilter(e) {
    const filter = e.target.name;
    const val = e.target.value;
    let {filters} = this.state;
    filters[filter] = val;
    if (filters.city) {
      this.fitBound = true;
    }
    this.setState({filters});
  }
  changeView(view) {
    if (view == 'map') {
      this.setState({view:'list'});
    } else {
      this.setState({view:'map'});
    }
  }
  closePopup() {
    this.setState({popup:{}});
  }
  toggleFilter() {
    this.setState({showFilter:!this.state.showFilter});
  }
  handleFilter(opt) {
    switch(opt) {
      case 'search':
        this.setState({showFilter:false});
        this.getProps();
        break;
      case 'cancel':
        this.setState({showFilter:false});
        break;
      case 'reset':
        this.setEmptyFilter();
        break;
      default:
        break;
    }
  }
  render() {
    const {loading,list,filters,view,popup,showFilter,cities} = this.state;
    let propsView = list.map((p)=>{
      return (
        <Prop key={p.sid} p={p}/>
      )
    });
    let viewIcon = 'fas fa-map';
    let mapClass,listClass;
    if (view == 'map') {
      viewIcon = 'fas fa-list-ul';
      mapClass = 'block';
      listClass = 'hide';
    } else {
      mapClass = 'hide';
      listClass = 'block';
    }
    const citiesView = cities.map((c)=>
      <option value={c} key={c}>{c}</option>
    )
    const rooms = [1,2,3,4,5].map((r)=>
      <option value={r} key={r}>{r}</option>
    );
    return (
      <section className="listPage">
        {popup.sid?
        <React.Fragment>
          <div className="popupBg" onClick={()=>this.closePopup()}></div>
          <div className="popup">
            <i className="fa fa-times" onClick={()=>this.closePopup()}></i>
            <Prop p={popup}/>
          </div>
        </React.Fragment>
        :null}
        <div className="filterContainer">
          <i className={viewIcon} onClick={()=>this.changeView(view)}></i>
          <div className="searchContainer">
            <input className="search" placeholder="Search address" value={filters.search} onChange={this.handleSearch} />
            <i className="fas fa-search"></i>
          </div>
          <i className="fas fa-filter" onClick={()=>this.toggleFilter()}></i>
        </div>
        <div className="container">
          {showFilter?
            <div className="filterPopup">
              <div className="filterGroup">
                <label className="filterLabel">City</label>
                <select className="filterInput" name="city" onChange={this.updateFilter} value={filters.city}>
                  <option value="">Select a city</option>
                  {citiesView}
                </select>
              </div>
              <div className="filterGroup">
                <label className="filterLabel">Prop Style</label>
                <select className="filterInput" name="ptype2" onChange={this.updateFilter} value={filters.ptype2}>
                  <option value="">Select a prop style</option>
                  <option value="House">House</option>
                  <option value="Detached">Detached</option>
                  <option value="Semi-Detached">Semi-Detached</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Loft">Loft</option>
                  <option value="Room">Room</option>
                </select>
              </div>
              <div className="filterGroup">
                <label className="filterLabel">Bedroom</label>
                <select className="filterInput" name="bdrms" onChange={this.updateFilter} value={filters.bdrms}>
                  <option value="">Select bedroom number</option>
                  {rooms}
                </select>
              </div>
              <div className="filterGroup">
                <label className="filterLabel">Bathroom</label>
                <select className="filterInput" name="bthrms" onChange={this.updateFilter} value={filters.bthrms}>
                  <option value="">Select bathroom number</option>
                  {rooms}
                </select>
              </div>
              <div className="filterGroup">
                <label className="filterLabel">Garage</label>
                <select className="filterInput" name="gr" onChange={this.updateFilter} value={filters.gr}>
                  <option value="">Select garage number</option>
                  {rooms}
                </select>
              </div>
              <div className="filterBtns">
                <a className="btn cancel" onClick={()=>this.handleFilter('cancel')}>Cancel</a>
                <a className="btn reset" onClick={()=>this.handleFilter('reset')}>Reset</a>
                <a className="btn" onClick={()=>this.handleFilter('search')}>Search</a>
              </div>
            </div>
          :null}
          <div id="mapContainer" className={mapClass}>
            {loading?<Loading />:null}
            <div id="map"></div>
          </div>
          <div id="propList" className={listClass}>
            {loading?<Loading />:propsView}
          </div>
        </div>
      </section>
    );
  }
}
export default App;