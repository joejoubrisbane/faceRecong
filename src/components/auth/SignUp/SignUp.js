import React, { Component } from "react";
import PropTypes from "prop-types";
import { Responsive, Segment, Card, Placeholder } from "semantic-ui-react";
import { Form, Field } from "react-final-form";
import { firestoreConnect } from "react-redux-firebase";
import { Slider } from "react-semantic-ui-range";
import { connect } from "react-redux";
import { compose } from "redux";

class SignUp extends Component {
  onSubmit = values => {
    const newRobot = values;
    const { firestore, history } = this.props;
  };
  render() {
    return (
      <Responsive>
        <Segment>
          <Form
            onSubmit={this.onSubmit}
            initialValues={{}}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form className="ui form" onSubmit={handleSubmit}>
                <div className="fields">
                  <div className="six wide field">
                    <Card fluid>
                      <Card.Header>
                        <label>Register</label>
                      </Card.Header>

                    </Card>
                  </div>
                  <div className=" ten wide field">
                    <label>First Name</label>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="First Name"
                    />

                    <label>Last Name</label>
                    <Field
                      name="lastName"
                      component="input"
                      type="text"
                      placeholder="Last Name"
                    />

                    <label>Email</label>
                    <Field
                      name="email"
                      component="input"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="field">
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    component="input"
                    placeholder="password"
                  />
                </div>
                <div>
                  <button
                    className="ui primary basic button "
                    type="submit"
                    disabled={submitting || pristine}
                  >
                    Submit
                  </button>
                  <button
                    className="ui secondary basic button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          />
        </Segment>
      </Responsive>
    );
  }
}

SignUp.propTypes = {
  firestore: PropTypes.object.isRequired,
  setting: PropTypes.object.isRequired
};
export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    setting: state.setting
  }))
)(SignUp);
