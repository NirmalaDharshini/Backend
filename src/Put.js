import axios from "axios";
import React, { Component } from "react";
class Put extends Component {
    constructor(props){
        super(props);
        this.state={
            id:" ",
            type:" ",
            day1:" ",
            day10:" ",
            day15:" ",
            day5:" ",
            yield_percentage:" ",
        }
    }
handleIdChange = (event) => {
    this.setState({ id:event.target.value});
}

handleTypeChange = (event) => {
    this.setState({ type:event.target.value});
}
handleDay1Change = (event) => {
    this.setState({ day1:event.target.value});
}
handleDay10Change = (event) => {
    this.setState({ day10:event.target.value});
}
handleDay15Change = (event) => {
    this.setState({ day15:event.target.value});
}
handleDay5Change = (event) => {
    this.setState({ day5:event.target.value});
}
handleYeild_percentageChange = (event) => {
    this.setState({ yield_percentage:event.target.value});
}
handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        id : this.state.id,
        type:this.state.type,
        day1:this.state.day1,
        day10:this.state.day10,
        day15:this.state.day15,
        day5:this.state.day5, 
        yield_percentage:this.state.yield_percentage    
    }
    axios.put('http://127.0.0.1:8080/put',data)
};
render(){
    return ( 
        <form onSubmit={this.handleSubmit} className="login-form" align="center">
            <label className="login-label">Id</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleIdChange}
            /><br/><br/>

            <label className="login-label">Type</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.type}
                onChange ={this.handleTypeChange}
            /><br/><br/>

            <label className="login-label">Day1</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.day1}
                onChange ={this.handleDay1Change}
            /><br/><br/>

            <label className="login-label">Day10</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.day10}
                onChange ={this.handleDay10Change}
            /><br/><br/>

            <label className="login-label">Day15</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.day15}
                onChange ={this.handleDay15Change}
            /><br/><br/>
             <label className="login-label">Day5</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.day5}
                onChange ={this.handleDay5Change}
            /><br/><br/>

            <label className="login-label">yield_percentage</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.Yield_percentage}
                onChange ={this.handleield_Percentage}
            /><br/><br/>
            <button className="login-button" type="submit"> Submit </button>
        </form>
    );
  }
}

export default Put;