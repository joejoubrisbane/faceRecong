import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from "redux";
import classNames from 'classnames'
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import { Form, Field, } from "react-final-form";
import { firebaseConnect } from 'react-redux-firebase'
import {Button, Card, Grid, Header, Image, Message, Placeholder, Responsive, Segment} from 'semantic-ui-react'
import {Slider} from "react-semantic-ui-range";
import { notifyUser} from "../../../actions/notifyAction";
import Alert from '../../layout/Alert'
class Login extends Component {


    onSubmit = ({email,password}) => {

        const { firebase,history,notifyUser} =this.props;
        firebase.login({email,password})
            .then(history.push('/viewRobots'))
            .catch(err => notifyUser('Invalid Login Credentials','error'))
    };
    render() {
        const { message ,messageType } = this.props.notify;
        return (
            <Responsive>
                <Segment>
                    <Form
                        onSubmit={this.onSubmit}
                        initialValues={{

                        }}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form className={classNames("ui form",{
                                red: messageType === 'error',
                                ribbon: messageType === 'error',
                                label:messageType === 'error',
                            })} onSubmit={handleSubmit}>


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
                                { message && <Alert message={message} messageType={messageType}/>}
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

export default compose(firebaseConnect(),
    connect((state,props)=>({
       notify:state.notify,
    }),{notifyUser})
    )(Login);
