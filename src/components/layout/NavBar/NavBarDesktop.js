
import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import {Link } from 'react-router-dom';
import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive,
    Button
} from "semantic-ui-react";


const NavBarDesktop = ({leftItems,rightItems}) => (
    <Menu fixed="top" inverted>
        <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Header>
            <h1 className='f1'>Robot Friends</h1>
        </Menu.Header>
        <Menu.Menu position="right">
            <Link className="f12 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l"
                  to="/home" >Home</Link>
            <Link className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l"
                  to="/createRobot" >Create Robot</Link>
            <Link className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l"
                  to="/viewRobot" >View Robot</Link>
            <Link className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l"
                  to="/login " >Login</Link>
            <Link className="f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l"
                  to="/signUp " >Sign up</Link>

        </Menu.Menu>
    </Menu>
);
export default NavBarDesktop;