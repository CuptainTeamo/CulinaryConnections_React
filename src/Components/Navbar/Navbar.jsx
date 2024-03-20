import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <header>
           <nav>
            <ul>
                <li><Link to="/"><h1>Books</h1></Link></li>
                <li><Link to="/AddRecipe"><h1>AddRecipe</h1></Link></li>
            </ul>
        </nav> 
        </header>
        
    );
}

export default Navbar;