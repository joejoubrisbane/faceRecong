import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import classNames from "classnames";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { firebaseConnect } from "react-redux-firebase";
import {
  Button,
  Card,
  Grid,
  Header,
  Image,
  Message,
  Placeholder,
  Responsive,
  Segment,
  Icon,
  Input
} from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";
import { notifyUser } from "../../../actions/notifyAction";
import Alert from "../../layout/Alert";
class Login extends Component {
  onSubmit = ({ email, password }) => {
    const { firebase, history, notifyUser } = this.props;
    firebase
      .login({ email, password })
      .then(history.push("/viewRobots"))
      .catch(err => notifyUser("Invalid Login Credentials", "error"));
  };
  render() {
    const { message, messageType } = this.props.notify;
    return (
      <Responsive>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment raised stacked>
              <Card fluid >
                <Image

                  alt="robots"
                  src={`https://robohash.org/1?bgset=bg1&set=set3&size=392x392`}
                  wrapped
                  ui={false}
                />

                <Card.Content extra>
                  <Form
                    onSubmit={this.onSubmit}
                    initialValues={{}}
                    render={({
                      handleSubmit,
                      form,
                      submitting,
                      pristine,
                      values
                    }) => (
                      <form
                        className={classNames("ui form")}
                        onSubmit={handleSubmit}
                      >
                        <div className="  field">

                          <label>Email</label>
                          <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                          >
                            {({ input, meta }) => (
                              <Input
                                type="email"
                                {...input}
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email"
                              />
                            )}
                          </Field>
                        </div>

                        <div className="field">
                          <label>Passwords</label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                          >
                            {({ input, meta }) => (
                              <Input
                                type="password"
                                {...input}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                              />
                            )}
                          </Field>
                        </div>
                        {message && (
                          <Alert message={message} messageType={messageType} />
                        )}
                        <button
                          className="ui primary button fluid "
                          type="submit"
                          disabled={submitting || pristine}
                        >
                          Login
                        </button>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                      </form>
                    )}
                  />
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
        </Grid>
      </Responsive>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Login);
