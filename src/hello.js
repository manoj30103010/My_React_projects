import React from'react';
 
 class hai extends React.component{
    state ={
     count:0,
     pap:3
   };
   incrementer =()=>{
     let count=this.state.count;
     this.setState({count:this.state.count+1});
   }
   render(){
     return(
       <div>
       <button onClick={this.incrementer}>
       click to increment</button>
       <div> {this.state.count}</div>
       </div>
     );
   }


 };
 export default hai;