import React, { Component } from "react";
import ReactDOM from "react-dom";
import Loading from './components/Loading.jsx';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading:false,
      user:{
        name:'',
        email:'',
        password:''
      },
      currentUser:currentUser
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
  }
  componentDidMount() {
    
  }
  handleAuth(opt) {
    const {user} = this.state;
    fetch('/api/user/login',{
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
    if (view == 'map') {
      this.setState({view:'list'});
    } else {
      this.setState({view:'map'});
    }
  }
  
  render() {
    const {user,currentUser} = this.state;
    let view = (
      <div className="authContainer">
        <h1>Login</h1>
        {/* <div className="filterGroup">
          <label className="filterLabel">name</label>
          <input className="filterInput" name="name" onChange={this.handleChange} value={user.name}/>
        </div> */}
        <div className="filterGroup">
          <label className="filterLabel">email</label>
          <input className="filterInput" name="email" onChange={this.handleChange} value={user.email}/>
        </div>
        <div className="filterGroup">
          <label className="filterLabel">password</label>
          <input className="filterInput" type="password" name="password" onChange={this.handleChange} value={user.password}/>
        </div>
        <div className="btns">
          <a className="btn" onClick={()=>this.handleAuth('login')}>login</a>
        </div>
      </div>
    );
    if (currentUser.name) {
      view = (
        <div className="dashboard">
          <h2>Dashboard</h2>
        </div>
      )
    }
    return (
      <div>
        {view}
      </div>
    );
  }
}
export default Login;