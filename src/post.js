import axios from "axios";
import React, { Component } from "react";
class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            id:" ",
            type:" ",
            Day1:" ",
            Day5:" ",
            Day10:" ",
            Day15:" ",
            yield_percentage:" ",
        }
    }
handleIdChange = (event) => {
    this.setState({ id:event.target.value});
}

handletypeChange = (event) => {
    this.setState({ type:event.target.value});
}
handleDay1Change = (event) => {
    this.setState({ Day1:event.target.value});
}
handleDay5Change = (event) => {
    this.setState({ Day5:event.target.value});
}
handleDay10Change = (event) => {
    this.setState({ Day10:event.target.value});
}
handleDay15Change = (event) => {
    this.setState({ Day15:event.target.value});
}
handleyield_percentageChange = (event) => {
    this.setState({ yield_percentage:event.target.value});
}
handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        id : this.state.id,
        type : this.state.type,
        Day1 : this.state.Day1,
        Day5 : this.state.Day5,
        Day10 : this.state.Day10, 
        Day15 : this.state.Day15,
        yield_percentage : this.state.yield_percentage,       
    }
    axios.post('http://127.0.0.1:8080/post',data)
};
render(){
    return ( 
        <form onSubmit={this.handleSubmit} className="login-form">
            <label className="login-label">Id</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleIdChange}
            />

            <label className="login-label">Type</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.type}
                onChange ={this.handletypeChange}
            />

            <label className="login-label">Day1</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.Day1}
                onChange ={this.handleDay1Change}
            />

            <label className="login-label">Day5</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.Day5}
                onChange ={this.handleDay5Change}
            />

            <label className="login-label">Day10</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.Day10}
                onChange ={this.handleDay10Change}
            />

            <label className="login-label">Day15</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.Day15}
                onChange ={this.handleDay15Change}
            />

            <label className="login-label">Yield_percentage</label>
            <input
                className="login-input" 
                type="text" 
                value={this.state.yield_percentage}
                onChange ={this.handleyield_percentageChange}
            />
            <button className="login-button" type="submit"> Submit </button>
        </form>
    );
  }
}

export default Post;