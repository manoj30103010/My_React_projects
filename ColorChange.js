import React from 'react';
class Class3 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color:"red"
    };
  }
  setGreen=e=>{
    this.setState({color:"green"});

  }
  setRed=e=>{
    this.setState({color:"red"});

  }
  setYellow=e=>{
    this.setState({color:"yellow"});

  }
  render(){
    return(
      <div>
        <h1 style={this.state.color}>this is class CSE-B Section</h1>
        <button onClick={this.setGreen}>Green</button>
        <button onClick={this.setRed}>Red</button>
        <button onClick={this.setYellow}>Yellow</button>
        </div>

    );
  }
}
