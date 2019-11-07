import React, { Component } from "react";
import ReactDOM from "react-dom";
import Prop from './components/Prop.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      list:[],
      loading:false,
    };
  }
  componentDidMount() {
    this.setState({loading:true});
    fetch('/api/prop')
    .then(res=>res.json())
    .then(ret=>{
      this.setState({list:ret,loading:false})
    })
  }
  render() {
    const {loading,list} = this.state;
    let propsView = list.map((p)=>{
      return (
        <Prop key={p.sid} p={p}/>
      )
    })
    return (
      <div className="propList">
        {loading?'Loading':propsView}
      </div>
    );
  }
}
export default App;