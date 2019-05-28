import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import { Form, Field, } from "react-final-form";
import { firebaseConnect } from 'react-redux-firebase'
import {Button, Card, Grid, Header, Image, Message, Placeholder, Responsive, Segment} from 'semantic-ui-react'
import {Slider} from "react-semantic-ui-range";
class Login extends Component {


    onSubmit = ({email,password}) => {

        const { firebase,history } =this.props;
        firebase.login({email,password}).then(history.push('/viewRobots'))
    };
    render() {
        return (
            <Responsive>
                <Segment>
                    <Form
                        onSubmit={this.onSubmit}
                        initialValues={{

                        }}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form className="ui form" onSubmit={handleSubmit}>


                                    <div className="  field">
                                        <label>Email</label>
                                        <Field
                                            name="email"
                                            component="input"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                <div className="field">
                                    <label>Passwords</label>
                                    <Field
                                        type='password'
                                        name="password"
                                        placeholder="Password"
                                    >
                                        {({input,meta})=>(
                                            <input type='password' {...input}/>
                                            )
                                        }
                                    </Field>
                                </div>

                                <button className='ui primary basic button ' type="submit" disabled={submitting || pristine}>
                                    Login
                                </button>
                                <pre>{JSON.stringify(values, 0, 2)}</pre>
                            </form>
                        )}
                    />
                </Segment>
            </Responsive>
        );
    }
}

Login.propTypes = {
    firebase:PropTypes.object.isRequired,
};

export default firebaseConnect()(Login);
