import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CreateRobot from "../../../containers/CreateRobot";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";
import { NavBarMobile } from "./NavBarMoblie";
import { NavBarChildren } from "./NavBarChildren";
import NavBarDesktop from "./NavBarDesktop";

class NavBar extends Component {
  state = {
    visible: false,
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;
    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }
  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };
  onLogoutClick = () => {
    const { firebase } = this.props;
    firebase.logout();
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });
  render() {
    const { children } = this.props;
    const { visible, isAuthenticated } = this.state;
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            isLogin={isAuthenticated}
            onLogoutClick={this.onLogoutClick}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop
            isLogin={isAuthenticated}
            onLogoutClick={this.onLogoutClick}
          />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

NavBar.propTypes = {
    firebase:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    setting: PropTypes.object.isRequired,
};

export default withRouter(
  compose(
    firebaseConnect(),
    connect((state, props) => ({
      auth: state.firebase.auth,
      setting: state.setting
    }))
  )(NavBar)
);
