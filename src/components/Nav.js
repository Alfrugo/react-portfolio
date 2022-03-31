import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../css/nav.css";

function Nav() {


  return (
    <div className="card text-center">
       <nav>
        <ul>
            <li>
                <Link 
                activeclassname = "active"
                isactive = "/About"
                to = "/About"
                >About</Link>
            </li>
            <li>
                <Link 
                activeclassname = "active"
                isactive = "/Contact"
                to = "/Contact"
                >Contact</Link>
            </li>
            <li>
                <Link 
                activeclassname = "active"
                isactive = "/Project"
                to = "/Project"
                >Projects</Link>
            </li>
            <li>
            <a href="https://alfredo-diez.com/wp-content/uploads/2018/09/RESUME-Alfredo-Diez-1.pdf">Resume</a>
            </li>
        </ul>
        </nav>

        {/* <nav>
            <ul>
                <li>
                    <a href="#bio">Bio</a>
                </li>
                <li>
                    <a href="https://alfredo-diez.com/wp-content/uploads/2018/09/RESUME-Alfredo-Diez-1.pdf">Resume</a>
                </li>
                <li>
                    <a href="#work">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact me</a>
                </li>
            </ul>
        </nav> */}


    </div>
  );
}

export default Nav;