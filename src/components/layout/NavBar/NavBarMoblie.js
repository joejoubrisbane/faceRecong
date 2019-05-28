import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import { NavLink } from 'react-router-dom'
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
                                 isLogin,
                          onPusherClick,
                          onToggle,
                          visible,
                                 onLogoutClick
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

                <Menu.Item  onClick={onToggle} as={NavLink} to='/home' >
                    Home
                </Menu.Item>
                <Menu.Item
                    onClick={onToggle}
                    to="/createRobot"
                    as={NavLink} >
                    Create Robot
                </Menu.Item>
                <Menu.Item
                    onClick={onToggle }
                    as={NavLink}
                    to="/viewRobots"
                >
                    View Robots
                </Menu.Item>
            {
                isLogin ?  <Menu.Item
                    onClick={ () => {
                        onLogoutClick();
                        onToggle();
                    }}
                    to="/home"
                    as={NavLink}>
                    Log out
                </Menu.Item>   :
                    <Menu.Item
                    onClick={onToggle}
                    to="/login"
                    as={NavLink}>
                    Login
                </Menu.Item>
            }

                <Menu.Item

                    onClick={onToggle}
                    to="/signUp"
                    as={NavLink}>
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


