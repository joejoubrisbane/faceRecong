import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import robot from './robot.png'
import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive
} from "semantic-ui-react";


export const NavBarMobile = ({
                          children,
                                 leftItems,
                                 rightItems,
                          onPusherClick,
                          onToggle,

                          visible
                      }) => (
    <Sidebar.Pushable>
        <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted

            vertical
            visible={visible}
        >

                <Menu.Item as={Link} to='/home' >
                    Home
                </Menu.Item>
                <Menu.Item>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
                          to="/createRobot" >Create Robot</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                          to="/shop">Shop</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
                          to="/about">About</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
                          to="/contact">Contact</Link>
                </Menu.Item>

        </Sidebar>
        <Sidebar.Pusher
            dimmed={visible}
            onClick={onPusherClick}
            style={{ minHeight: "100vh" }}
        >
            <Menu fixed="top" inverted>
                <Menu.Item>
                    <Image size="mini" src={robot} />
                </Menu.Item>
                <Menu.Item onClick={onToggle}>
                    <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Menu position="right">

                </Menu.Menu>
            </Menu>
            {children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);


