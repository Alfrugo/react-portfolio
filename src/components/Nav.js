import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../css/nav.css";

function Nav() {


  return (
    <div className="card text-center">
        <p> This is the nav </p>
        <ul>
            <li>
                <Link 
                activeClassName = "active"
                isActive = {()=>window.location.pathname === "/About"}
                to = "/About"
                >About</Link>
            </li>
            <li>
                <Link 
                activeClassName = "active"
                isActive = {()=>window.location.pathname === "/Contact"}
                to = "/Contact"
                >Contact</Link>
            </li>
            <li>
                <Link 
                activeClassName = "active"
                isActive = {()=>window.location.pathname === "/Project"}
                to = "/Project"
                >Project</Link>
            </li>
        </ul>

    </div>
  );
}

export default Nav;