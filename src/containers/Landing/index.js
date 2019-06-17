import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/animate.css'
import './css/bootstrap.css'
import './css/main.css'
import './css/owl.carousel.css'
import './css/owl.theme.css'
import './css/owl.transitions.css'
class Landing extends Component {
    render() {
        return (
            <div>
              <header>
                <div className="container">
                  <div className="logo pull-left animated wow fadeInLeft">
                    <img className="logo-image" src="img/logo.png" alt="" title="" />
                  </div>
      
      
                  <nav className="pull-left">
                    <ul className="list-unstyled">
                      <li className="animated wow fadeInLeft" data-wow-delay="0s"><a href="#about">About</a></li>
                      <li className="animated wow fadeInLeft" data-wow-delay=".1s"><a href="#app_features">Features</a>
                      </li>
                      <li className="animated wow fadeInLeft" data-wow-delay=".2s"><a
                       href="#testimonials">Testimonials</a></li>
                    </ul>
                  </nav>
      
                  <div className="social pull-right">
                    <ul className="list-unstyled">
                      <li className="animated wow fadeInRight" data-wow-delay=".2s"><a href="#"><img
                       src="img/facebook.png" alt="" title="" /></a></li>
                      <li className="animated wow fadeInRight" data-wow-delay=".1s"><a href="#"><img
                       src="img/twitter.png" alt="" title="" /></a></li>
                      <li className="animated wow fadeInRight" data-wow-delay="0s"><a href="#"><img src="img/google.png"
                                                                                                    alt="" title="" /></a>
                      </li>
                    </ul>
                  </div>
      
                  <span className="burger_icon">menu</span>
                </div>
              </header>
            </div>
        );
    }
}

Landing.propTypes = {};

export default Landing;
