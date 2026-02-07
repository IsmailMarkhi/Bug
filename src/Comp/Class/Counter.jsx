import React from "react";
class Counter extends React.Component{
    
    state={
        count:0
    };
    Inc=()=>{
        return(this.setState({count:this.state.count+1}));
    };

    render(){
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={()=>this.Inc}>Increment</button>
            {/* <button onClick={p}>Increment</button> */}
        </div>
    }
}
export default Counter;