import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import CreateRobot from '../../../containers/CreateRobot';
import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive
} from "semantic-ui-react";
import {NavBarChildren,NavBarMobile} from './NavBarMoblie'

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
        const { children, leftItems, rightItems } = this.props;
        return (

            <div>
            {/*<Responsive {...Responsive.onlyMobile}>*/}

            {/*    <NavBarMobile/>*/}
            {/*    <NavBarChildren>{children}</NavBarChildren>*/}
            {/*</Responsive>*/}
            <header className="bg-white black-80 tc pv4 avenir">

                <h1 className="mt2 mb0 baskerville i fw1 f1">Title</h1>
                <h2 className="mt2 mb0 f6 fw4 ttu tracked">Your amazing subtitle</h2>
                <nav className="bt bb tc mw7 center mt4">
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
                       to="/">Home</Link>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
                       to="/createRobot" >Create Robot</Link>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                       to="/shop">Shop</Link>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
                       to="/about">About</Link>
                    <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
                       to="/contact">Contact</Link>
                </nav>
            </header>
            </div>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;
