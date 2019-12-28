import React, {Component, Fragment} from 'react';
import ProgressBar from "./pbar";

class App extends Component {
  constructor(){
    super();
    this.state={
      percentage: 0,
    }
  }
  checkPercentage=()=>{
    if(this.state.percentage>100 || this.state.percentage<0)
      this.setState({percentage:0})
  }
  render(){
    return(
      <Fragment>
        <ProgressBar percentage={this.state.percentage} />
      
        <button onClick={()=>{this.setState({percentage: this.state.percentage+15});this.checkPercentage();}} style={{color:"green"}}>Next</button>
        <button onClick={()=>{this.setState({percentage: this.state.percentage-15});this.checkPercentage();}} style={{color:"red"}}>Previous</button>
  
      </Fragment>
       )
  }
}

export default App;