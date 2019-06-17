import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Responsive,
  Segment,
  Card,
  Placeholder,
  Image
} from "semantic-ui-react";
import { Form, Field } from "react-final-form";
import { firestoreConnect } from "react-redux-firebase";
import { Slider } from "react-semantic-ui-range";
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { notifyUser } from "../../../actions/notifyAction";
import Alert from "../../layout/Alert";

class SignUp extends Component {
  onSubmit = values => {
    const { email, password } = values;
    const { firebase, history, notifyUser } = this.props;
    firebase
      .createUser({ email, password })
      .catch(err => notifyUser("That email already exits", "error"));
  };
  render() {
    const { message, messageType } = this.props.notify;
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
                        <label>Let's start! </label>
                      </Card.Header>
                      <Image
                        alt="robots"
                        src={`https://robohash.org/2?set=set5&bgset=bg1&size=300x300`}
                        wrapped
                        ui={false}
                      />
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
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="field">
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    component="input"
                    placeholder="Password"
                  />
                </div>
                {message && (
                  <Alert message={message} messageType={messageType} />
                )}
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
  notify: PropTypes.object.isRequired
};
export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(SignUp);
