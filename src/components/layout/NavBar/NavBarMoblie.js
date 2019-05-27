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
    Sticky,
    Responsive
} from "semantic-ui-react";
import './NavBar.css'


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
            direction='right'
            vertical
            visible={visible}
        >

                <Menu.Item  onClick={onToggle} as={Link} to='/' >
                    Home
                </Menu.Item>
                <Menu.Item
                    onClick={onToggle}
                    to="/createRobot"
                    as={Link} >
                    Create Robot
                </Menu.Item>
                <Menu.Item
                    onClick={onToggle }
                    as={Link}
                    to="/viewRobots"
                >
                    View Robots
                </Menu.Item>
                <Menu.Item

                    onClick={onToggle}
                    to="/login"
                    as={Link}>
                    Login
                </Menu.Item>
                <Menu.Item

                    onClick={onToggle}
                    to="/signUp"
                    as={Link}>
                    Sign up
                </Menu.Item>

        </Sidebar>
        <Sidebar.Pusher
            dimmed={visible}
            onClick={onPusherClick}
            fixed="top"
            style={{ minHeight: "100vh" }}
        >
            <Menu fixed="top" inverted >
                <Menu.Item>
                    <Image size="mini" src={robot} />
                </Menu.Item >
                <Menu.Item position="right" onClick={onToggle}>
                    <Icon name="sidebar" />
                </Menu.Item>

            </Menu>
            {children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>

);


