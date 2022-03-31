// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function About() {
  let greeting = 'Welcome the following students to class!';


  return (
    <section id="bio" className="portfolio-section">
        <div className="left-column">
            <h3>Bio</h3>
        </div>
        <div className="right-column">
        <img src="https://alfredo-diez.com/wp-content/uploads/2018/01/Alfredo-Diez-1-150x150.jpg" />
            <p>
                I was born and raised in Madrid, Spain, where I earned Bachelors of Arts and Science degrees majoring in Communications and minoring in Computer Science at Saint Louis University. My professional path has always been aligned with my personal interests, linked to creative and technical fields such as design, production, advertising, photography, web and mobile app development and digital marketing.
            </p>
        </div>
    </section>
  );
}

export default About;