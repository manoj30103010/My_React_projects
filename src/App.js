import React from 'react';
class hello extends React.Component{
  constructor(props){
    super(props);
    this.callable=this.callable.bind(this);
  }
callable(){
    alert("hai");
  }
  render(){
    return (
      <div>
      <button onClick={this.callable} >
      Clilicker</button>
      </div>
    );
  }
};
export default hello;   