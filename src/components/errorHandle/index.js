import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ooooops. That is not good </h1>
          <img
            src={`https://robohash.org/1?set=set5&bgset=bg1&size=300x300`}
            alt="I am sorry"
          />
          <p>Let me get back to you soon</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorHandler.propTypes = {};

export default ErrorHandler;
