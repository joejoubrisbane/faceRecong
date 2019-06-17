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
      return <h1>Ooooops. That is not good </h1>;
    }
    return this.props.children;
  }
}

ErrorHandler.propTypes = {};

export default ErrorHandler;
