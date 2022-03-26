import React, { useState } from 'react';
import Nav from "./Nav"

function Header() {


  return (
    <div className="header">
        <h1>
            Alfredo<span>Diez</span>
        </h1>
        <Nav />
    </div>
  );
}

export default Header;