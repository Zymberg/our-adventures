import React from 'react';
import "./Footer.css"
import Air from "../assets/air.jpg"
import two from "../assets/2.jpg"
import three from "../assets/3.jpg"
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

function Footer() {
    return (
        <div className="villas">
          <div className="container-villa">
            <div className="villa">

              <div className="content-all">
                <div className="img-container">
                <a href="https://www.cnn.com/travel/article/tripadvisor-travelers-choice-awards-2022/index.html">
                <img className="span-3 image-grid.row2" src={Air} />
                </a>
                </div>
                <div className="title">        
                <a href="https://www.cnn.com/travel/article/tripadvisor-travelers-choice-awards-2022/index.html">
                <h3>Top 10 destinations today</h3>
                </a>
                </div>
                <div className="content-text">
                  <p> Tripadvisor says a 20th-century fishing village that has boomed into a 21st-century global hot spot for high-end travel is its most popular destination in the world for 2022.
The travel platform has just released its Travelers' Choice Awards for 2022: The Best of the Best Destinations.
While ultramodern Dubai snags the top spot, it's not the only Middle Eastern entry. And this year's list ranges from European stalwarts to coveted tropical and desert getaways.
                  </p>
                </div>
              </div>
            
              <div className="content-all">
                <div className="img-container">
                <a href="https://www.nerdwallet.com/article/travel/u-s-citizens-can-travel-right-now">
                <img className="span-3 image-grid.row2" src={three}  />
                </a>
                </div>
                <div className="title">
                <a href="https://www.nerdwallet.com/article/travel/u-s-citizens-can-travel-right-now">
                <h3> Latest Covid Restrictions</h3>
                </a>
                </div>
                <div className="content-text">
                  <p> As the coronavirus pandemic continues and because the United States was one of the hardest hit places, U.S. citizens continue to find themselves blocked from entering some countries. It's no wonder so many Americans are asking themselves, "Where can I travel right now?" only to be met with confusion and frustration.
                  </p>
                </div>
              </div>

              
              <div className="content-all">
                <div className="img-container">
                <a href="https://www.planetware.com/usa/best-places-to-visit-in-the-united-states-us-ny-21.htm">
                <img className="span-3 image-grid.row2" src={Air} />
                </a>
                </div>
                <div className="title">
                <a href="https://www.planetware.com/usa/best-places-to-visit-in-the-united-states-us-ny-21.htm">
                <h3> 22 Best Places to Visit in the United States</h3>
                </a>
                </div>
                <div className="content-text">
                  <p> With so much to see in this vast country, it can be difficult to know where to start when it comes to planning a trip in the United States. World-class cities, some known for history and others known for fun or glamour, give visitors a broad spectrum of places to choose from. The best places to visit in the United States may simply depend on your personal interests.
                  </p>
                </div>
              </div>
  
              <div className='social'>
                <ul className="horizontal-list">
                   <li><FaFacebook className='icon' /></li>
                   <li><FaInstagram className='icon' /></li>
                   <li><FaTwitter className='icon' /></li>
                   <li><FaPinterest className='icon' /></li>
                </ul>
            </div>

            </div>            
          </div>
        </div>
    );
}

export default Footer;