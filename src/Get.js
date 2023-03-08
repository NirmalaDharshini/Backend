import axios from "axios";
import React,{Component} from "react";
class Get extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/get').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Day1</th>
                        <th>Day10</th>
                        <th>Day15</th>
                        <th>Day5</th>
                        <th>yield_percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.type}</td>
                            <td>{user.day1}</td>
                            <td>{user.day10}</td>
                            <td>{user.day15}</td>
                            <td>{user.day5}</td>
                            <td>{user.yield_percentage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
      }
}
export default Get;