import React from 'react';
import { render } from 'react-dom';
class Class2 extends React.Component{
  state={
    count:0
  };
  Handle=e=>{
    const count=this.state.count;
    this.setState({count:count+1})
  }
  render(){
    return(
    <div>
      <button onClick={this.Handle}>
        click</button>
        <div>{this.state.count}</div>
      </div>
      );
}
}
export default Class2;
