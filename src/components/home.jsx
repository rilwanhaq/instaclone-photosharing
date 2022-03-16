import React from 'react';
import './home.css';
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='main-container'>
            <div>
                <img src='https://assets.gadgets360cdn.com/pricee/assets/product/202111/spider_man_no_way_home_india_1638191040.jpg' alt='profile'></img>
            </div>
            <div className='home-div'>
                <p className='para'>Hello From Rilwan</p>
                <Link to='/feeds'><button>Enter</button></Link>
            </div>
        </div>
        
    );
}