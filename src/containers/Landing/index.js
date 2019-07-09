import React, { Component } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import { CustomDiv } from "./elements.";

class Landing extends Component {
  render() {
    return (
      <CustomDiv>
        <section className="hero" id="hero">
          <div className="container">
            <div className="caption">
              <Fade duration={3000} right>
                <h1 className="text-uppercase   wow ">
                  Creators of Robofriends and SmartBrain
                </h1>
                <p className="enhance text-lowercase  wow ">
                  Developers of the future, building for today
                </p>
              </Fade>

              <a
                href="https://github.com/aneagoie/robofriends"
                className="app_store_btn text-uppercase animated wow fadeInLeft"
              >
                <i className="android_icon" />
                <span>Robofriends</span>
              </a>

              <a
                href="https://github.com/aneagoie/smart-brain"
                className="app_store_btn text-uppercase animated wow fadeInLeft"
              >
                <i className="iphone_icon" />
                <span>SmartBrain</span>
              </a>
            </div>
          </div>
        </section>

        <section className="featured_on">
          <div className="container">
            <ul className="list-unstyled text-center clearfix">
              <li className="col-xs-6 col-sm-6 col-md-3 animated  fadeInDown">
                <img src="img/google_logo.png" alt="" title="" />
              </li>
              <li className="col-xs-6 col-sm-6 col-md-3 animated  fadeInDown">
                <img src="img/facebook_logo.png" alt="" title="" />
              </li>
              <li className="col-xs-6 col-sm-6 col-md-3 animated  fadeInDown">
                <img src="img/yahoo_logo.png" alt="" title="" />
              </li>
              <li className="col-xs-6 col-sm-6 col-md-3 animated  fadeInDown">
                <img src="img/paypal_logo.png" alt="" title="" />
              </li>
            </ul>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center animated  fadeInLeft">
                <Fade duration={2000} left>
                  <div className="iphone">
                    <img src="img/iphone.png" alt="" titl="" />
                  </div>
                </Fade>
              </div>
              <div className="col-md-6 animated  fadeInRight">
                <div className="features_list">
                  <h1 className="text-uppercase">
                    The Greatest Products Ever Created
                  </h1>
                  <p>
                    Seuismod ligula ipsum vulputate tellus quisque dictum tortor
                    at purus faucibus tincidunt, pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas.{" "}
                  </p>
                  <ul className="list-unstyled">
                    <li className="camera_icon">
                      <span>Euismod ligula ipsum vulputate tellus.</span>
                    </li>
                    <li className="video_icon">
                      <span>Morbi non efficitur nibh sit amet est eros.</span>
                    </li>
                    <li className="eye_icon">
                      <span>Fusce faucibus ante liberonec luctus egestas.</span>
                    </li>
                    <li className="pic_icon">
                      <span>Quisque pretium malesuada ornare.</span>
                    </li>
                    <li className="loc_icon">
                      <span>Cras interdum vestibulum dolor.</span>
                    </li>
                  </ul>

                  <a
                    href="#"
                    className="app_store_btn text-uppercase"
                    id="play_video"
                    data-video="https://www.youtube.com/watch?v=sCX_YMPuJGA?autoplay=1&showinfo=0"
                  >
                    <i className="play_icon" />
                    <span>About Video</span>
                  </a>
                  <a href="#hero" className="app_link">
                    Get the app
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about_video show_video">
            <a href="" className="close_video" />
          </div>
        </section>

        <section className="app_features" id="app_features">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-4 col-md-4 details animated  fadeInDown">
                <img src="img/f_icon1.png" alt="" title="" />
                <h1 className="text-uppercase">malesuada fames turpis.</h1>
                <p className="text-lowercase">
                  vel ultrices mauris libero id diam. Vivamus tellus sagittis
                  facilisis nisi quis mollis risus quisque ultrices elit.
                </p>
              </div>
              <div className="col-sm-4 col-md-4 details animated  fadeInDown">
                <img src="img/f_icon2.png" alt="" title="" />
                <h1 className="text-uppercase">malesuada fames turpis.</h1>
                <p className="text-lowercase">
                  vel ultrices mauris libero id diam. Vivamus tellus sagittis
                  facilisis nisi quis mollis risus quisque ultrices elit.
                </p>
              </div>
              <div className="col-sm-4 col-md-4 details animated  fadeInDown">
                <img src="img/f_icon3.png" alt="" title="" />
                <h1 className="text-uppercase">malesuada fames turpis.</h1>
                <p className="text-lowercase">
                  vel ultrices mauris libero id diam. Vivamus tellus sagittis
                  facilisis nisi quis mollis risus quisque ultrices elit.
                </p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-4 col-md-4 details animated  fadeInDown">
                <img src="img/f_icon4.png" alt="" title="" />
                <h1 className="text-uppercase">malesuada fames turpis.</h1>
                <p className="text-lowercase">
                  vel ultrices mauris libero id diam. Vivamus tellus sagittis
                  facilisis nisi quis mollis risus quisque ultrices elit.
                </p>
              </div>
              <div className="col-sm-4 col-md-4 details animated  fadeInDown">
                <img src="img/f_icon5.png" alt="" title="" />
                <h1 className="text-uppercase">malesuada fames turpis.</h1>
                <p className="text-lowercase">
                  vel ultrices mauris libero id diam. Vivamus tellus sagittis
                  facilisis nisi quis mollis risus quisque ultrices elit.
                </p>
              </div>
              <div className="col-sm-4 col-md-4 details animated  fadeInDown">
                <img src="img/f_icon6.png" alt="" title="" />
                <h1 className="text-uppercase">malesuada fames turpis.</h1>
                <p className="text-lowercase">
                  vel ultrices mauris libero id diam. Vivamus tellus sagittis
                  facilisis nisi quis mollis risus quisque ultrices elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials animated  fadeIn" id="testimonials">
          <div className="container">
            <div className="testimonials_list">
              <Fade left cascade duration={1000}>
                <ul
                  className="list-unstyled text-center slides clearfix"
                  id="tslider"
                >
                  <li>
                    <blockquote>
                      <p>
                        Integer pharetra tellus varius, dictum erat vel, maximus
                        tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec
                        pulvinar vehicula donec congue tortor eget sem
                        condimentum, ut tempor massa porttitor. Praesent
                        tincidunt mi orci in sollicitudin mi dapibus dapibus
                        pellentesque habitant morbi tristique senectus et
                        malesuada fames turpis egestas.
                      </p>
                      <span className="author text-uppercase">John Doe</span>
                      <span className="job">Full Stack developer</span>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                        Integer pharetra tellus varius, dictum erat vel, maximus
                        tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec
                        pulvinar vehicula donec congue tortor eget sem
                        condimentum, ut tempor massa porttitor. Praesent
                        tincidunt mi orci in sollicitudin mi dapibus dapibus
                        pellentesque habitant morbi tristique senectus et
                        malesuada fames turpis egestas.
                      </p>
                      <span className="author text-uppercase">Alex Fredy</span>
                      <span className="job">Javascript developer</span>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                        Integer pharetra tellus varius, dictum erat vel, maximus
                        tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec
                        pulvinar vehicula donec congue tortor eget sem
                        condimentum, ut tempor massa porttitor. Praesent
                        tincidunt mi orci in sollicitudin mi dapibus dapibus
                        pellentesque habitant morbi tristique senectus et
                        malesuada fames turpis egestas.
                      </p>
                      <span className="author text-uppercase">Sara Aliba</span>
                      <span className="job">Web Designer</span>
                    </blockquote>
                  </li>
                </ul>
              </Fade>
              <div id="slider_nav">
                <div id="prev_arrow" />
                <div id="next_arrow" />
              </div>
            </div>
          </div>
        </section>

        <section className="sub_box">
          <p className="cta_text animated  fadeInDown">
            We're hiring. Join Our company!
          </p>
          <form
            action="#"
            metohd="post"
            className="animated  fadeIn"
            id="submit_form"
          >
            <input type="email" id="mc-email" placeholder="Enter your email" />
            <button type="submit" id="mc_submit">
              <i className="icon" />
            </button>
          </form>
          <div className="message" id="error_msg">
            Please Enter A Valid Email.
          </div>
          <div className="message" id="success_msg">
            Thank You For Your Subscription.
          </div>
        </section>

        <footer>
          <ul className="list-unstyled list-inline app_platform">
            <li className="animated  fadeInDown">
              <a href="">
                <img src="img/android_icon.png" alt="" title="" />
              </a>
            </li>
            <li className="animated  fadeInDown">
              <a href="">
                <img src="img/ios_icon.png" alt="" title="" />
              </a>
            </li>
            <li className="animated  fadeInDown">
              <a href="">
                <img src="img/windows_icon.png" alt="" title="" />
              </a>
            </li>
          </ul>
          <p className="copyright animated  fadeIn">
            <strong>Pixelhint</strong>
          </p>
        </footer>
      </CustomDiv>
    );
  }
}

Landing.propTypes = {};

export default Landing;
