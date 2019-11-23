import React, { Component } from "react";
import ReactDOM from "react-dom";
import Loading from './components/Loading.jsx';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading:false,
      currentUser:currentUser
    };
    this.handleFav = this.handleFav.bind(this);
  }
  componentWillMount() {
  }
  componentDidMount() {
    
  }
  handleFav() {
    let {currentUser} = this.state;
    if (!currentUser.name) {
      window.location.href = '/login?d=/prop/'+currentUser.currentPropId;
      return;
    }
    let favs = currentUser.favs || [];
    const currentPropId = currentUser.currentPropId;
    const idx = favs.indexOf(currentPropId);
    if (idx>-1) {
      favs.splice(idx,1)
    } else {
      favs.unshift(currentPropId);
    }
    fetch('/api/prop/fav',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({favs})
    }).then(res=>res.json()).then(ret=>{
      if (ret.ok) {
        currentUser.favs = favs;
        this.setState({currentUser});
      } else {
      }
    })
  }
  render() {
    const {currentUser} = this.state;
    const currentPropId = currentUser.currentPropId;
    const favs = currentUser.favs || [];
    let favView;
    if (favs.indexOf(currentPropId) > -1) {
      favView = <i className="fas fa-heart">Added to favourite</i>;
    } else {
      favView = <i className="far fa-heart">Add to favourite</i>;
    }
    return (
      <div onClick={()=>this.handleFav()}>
        {favView}
      </div>
    );
  }
}
export default Login;