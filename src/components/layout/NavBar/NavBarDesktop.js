import _ from "lodash";
import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import robot from "./robot.png";

import { NavLink } from "react-router-dom";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button
} from "semantic-ui-react";

const NavBarDesktop = ({ onLogoutClick, isLogin }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src={robot} />
    </Menu.Item>
    <Menu.Header>
      <h5 className="f1">Robot Friends</h5>
    </Menu.Header>
    <Menu.Menu position="right">
      <NavLink
        className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l "
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l "
        to="/createRobot"
      >
        Create Robot
      </NavLink>
      <NavLink
        className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l "
        to="/viewRobots"
      >
        View Robots
      </NavLink>
      {isLogin ? (
        <Fragment>
          <NavLink
            className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l"
            to="/setting"
          >
            Setting
          </NavLink>
          <NavLink
            className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l"
            onClick={onLogoutClick}
            to="/home"
          >
            Log out
          </NavLink>
        </Fragment>
      ) : (
        <div>
          <NavLink
            className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l "
            to="/signUp"
          >
            Sign up
          </NavLink>
        </div>
      )}
    </Menu.Menu>
  </Menu>
);
export default NavBarDesktop;
