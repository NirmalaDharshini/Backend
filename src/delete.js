import React from 'react';  
import { Link } from "react-router-dom";   
import axios from 'axios';  


class Deletion extends React.Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(id)
    {
        axios.delete('http://127.0.0.1:8080/del/'+id,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.id}>
            <td className="text-left">{Expense.id}</td>
            <td className="text-left">{Expense.type}</td>
            <td className="text-left">{Expense.day1}</td>
            <td className="text-left">{Expense.day10}</td>
            <td className="text-left">{Expense.day15}</td>
            <td className="text-left">{Expense.day5}</td>
            <td className="text-left">{Expense.yield_percentage}</td>
            <td><button size="sm" color="danger" onClick={() => this.remove(Expense.id)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div>
        <div class="table-title">
        <h3>Data Table</h3>
        </div>
        <table class="table-fill">
        <thead>
        <tr>
        <th class="text-left">id</th>
        <th class="text-left">type</th>
        <th class="text-left">day1</th>
        <th class="text-left">day10</th>
        <th class="text-left">day15</th>
        <th class="text-left">day5</th>
        <th class="text-left">yield_percentage</th>
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Deletion;