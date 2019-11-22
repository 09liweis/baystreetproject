import React, { Component } from "react";
import ReactDOM from "react-dom";
import Loading from './components/Loading.jsx';
import Prop from './components/Prop.jsx';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading:false,
      view:'login',
      user:{
        name:'',
        email:'',
        password:''
      },
      currentUser:currentUser
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  componentWillMount() {
  }
  componentDidMount() {
    
  }
  handleAuth(opt) {
    const {user} = this.state;
    if (opt == 'login') {
      var url = '/api/user/login';
    } else {
      var url = '/api/user/';
    }
    fetch(url,{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(user)
    }).then(res=>res.json()).then(ret=>{
      if (ret.ok) {
        window.location.href = '/dashboard';
      } else {
        alert('Email or Password is not correct');
      }
    })
  }
  handleChange(e) {
    const field = e.target.name;
    const val = e.target.value;
    let {user} = this.state;
    user[field] = val;
    this.setState({user});
  }
  changeView(view) {
    this.setState({view});
  }
  
  render() {
    const {user,currentUser,view} = this.state;
    let formView = (
      <div className="authContainer">
        <h1>{view}</h1>
        {view == 'register'?
        <div className="filterGroup">
          <label className="filterLabel">name</label>
          <input className="filterInput" name="name" onChange={this.handleChange} value={user.name}/>
        </div>
        :null}
        <div className="filterGroup">
          <label className="filterLabel">email</label>
          <input className="filterInput" name="email" onChange={this.handleChange} value={user.email}/>
        </div>
        <div className="filterGroup">
          <label className="filterLabel">password</label>
          <input className="filterInput" type="password" name="password" onChange={this.handleChange} value={user.password}/>
        </div>
        <div className="btns">
          <a className="btn" onClick={()=>this.handleAuth(view)}>{view}</a>
        </div>
        <div className="links">
          {view == 'login'?
          <a className="link" onClick={()=>this.changeView('register')}>register</a>
          :<a className="link" onClick={()=>this.changeView('login')}>login</a>}
        </div>
      </div>
    );
    if (currentUser.name) {
      let favs;
      if (currentUser.props && currentUser.props.length > 0) {
        favs = currentUser.props.map((p)=>
          <Prop p={p} key={p.id} />
        )
      } else {
        favs = <div className="emptyMsg">You don't have any favourite property yet.</div>
      }
      formView = (
        <div className="dashboard">
          <a className="btn" href="/logout">Logout</a>
          <h2>Favourites</h2>
          {favs}
        </div>
      )
    }
    return (
      <div>
        {formView}
      </div>
    );
  }
}
export default Login;