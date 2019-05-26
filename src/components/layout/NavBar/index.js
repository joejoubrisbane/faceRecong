import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateRobot from '../../../containers/CreateRobot';
import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive
} from "semantic-ui-react";
import {NavBarMobile} from './NavBarMoblie'
import {NavBarChildren} from './NavBarChildren'
import NavBarDesktop from './NavBarDesktop'

const leftItems = [
    { as: "Link", content: "Home", key: "home",to:'/home' },
    { as: "Link", content: "createRobot", key: "createRobot",to:'/createRobot' }
];
const rightItems = [
    { as: "Link", content: "Home", key: "home",to:'/home'  },
    { as: "Link", content: "createRobot", key: "createRobot",to:'/createRobot' }
];

class NavBar extends Component {
    state = {
        visible: false
    };

    handlePusher = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false });
    };

    handleToggle = () => this.setState({ visible: !this.state.visible });
    render() {
        const { children } = this.props;
        const { visible } = this.state;
        return (

            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <NavBarMobile
                        leftItems={leftItems}
                        onPusherClick={this.handlePusher}
                        onToggle={this.handleToggle}
                        rightItems={rightItems}
                        visible={visible}
                    >
                        <NavBarChildren>{children}</NavBarChildren>
                    </NavBarMobile>
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <NavBarDesktop
                        leftItems={leftItems}
                        rightItems={rightItems}
                    />
                    <NavBarChildren>{children}</NavBarChildren>
                </Responsive>
            </div>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;
