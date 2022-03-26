// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function About() {
  let greeting = 'Welcome the following students to class!';


  return (
    <div className="card text-center">
        <p> This is the about page </p>
    </div>
  );
}

export default About;