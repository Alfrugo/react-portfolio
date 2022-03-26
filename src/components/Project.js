import React, { useState } from 'react';

function Project() {


  return (
    <div className="card text-center">
        <section id="work" className="portfolio-section">
        <div className="left-column">
            <h3>Projects</h3>
        </div>

        <div className="right-column">
            <div className="work-sample-hero background-img">
                <a href="https://alfrugo.github.io/run-buddy/">
                <h4>Run Buddy</h4>
                <img className="img-bg" src="https://srcnaut.com/cdn-cgi/image/f=auto,fit=crop,g=0.5x0.5,w=2000,h=1125,q=90,d=1/upload/4f/63/17/shutterstock-150981035.jpg" alt="" />
                </a>
            </div>

            <div className="work-sample">
                <a href="https://alfredo-diez.com/archives/portfolio/reveal/">
                    <h4>Reveal</h4>
                    <img className="img-bg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthewheelchairtraveller.com%2F2018%2Fwp-content%2Fuploads%2F2017%2F09%2Fdscn2411.jpg&f=1&nofb=1" alt="Reveal website and branding" />
                </a>
            </div>
            <div className="work-sample">
                <a href="https://alfredo-diez.com/archives/portfolio/branding-design-creative-direction-product-development/">
                    <h4>Hive</h4>
                    <img className="img-bg" src="https://alfredo-diez.com/wp-content/uploads/2017/12/hive-web-1-1024x576-1.jpg" alt="adfadf"/>
                </a>
            </div>
            <div className="work-sample">
                <a href="https://alfredo-diez.com/archives/portfolio/stat-digital-marketing-and-branding/">
                    <h4>Transit!</h4>
                    <img className="img-bg" src="https://alfredo-diez.com/wp-content/uploads/2017/12/summer-tt-webinar-series-1024x576-1.jpg" alt="adfadf" />
                </a>
            </div>
            <div className="work-sample">
                <a href="https://alfredo-diez.com/archives/portfolio/marketing-promotion/">
                    <h4>New York - TLC</h4>
                    <img className="img-bg" src="https://alfredo-diez.com/wp-content/uploads/2017/12/tlc-eblast-1024x576-1.jpg" alt="adfadf" />
                </a>
            </div>
            <div className="work-sample">
                <a href="https://alfredo-diez.com/wp-content/uploads/2017/12/hive-branding-zoom-1024x576-1-1.jpg">
                    <h4>Hive UI</h4>
                    <img className="img-bg" src="https://alfredo-diez.com/wp-content/uploads/2017/12/Screen-Shot-2018-02-21-at-8.13.54-PM-1-1024x692.png" alt="" />
                </a>
            </div>
            <div className="work-sample">
                <a href="https://alfredo-diez.com/archives/portfolio/product-photography-branding/">
                    <h4>Photography</h4>
                    <img className="img-bg" src="https://alfredo-diez.com/wp-content/uploads/2017/12/4x-1.jpg" alt="adfadf" />       
                </a>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Project;