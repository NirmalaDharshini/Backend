import React from "react";
import {Link } from "react-router-dom";
import About from "./about";
const Home = () => {
    return (
        <div>

            <div className="but">
           <button><h1>Online Shopping</h1></button>
                <About/>
            <Link to="/post"><button className='button'>Post</button></Link>
            <Link to="/get"><button className='button'>Get</button></Link>
            <Link to="/put"><button className='button'>Put</button></Link>
            <Link to="/del"><button className='button'>Delete</button></Link>

            </div>

        </div>
    )
};


export default Home;