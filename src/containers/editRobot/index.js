import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";

import {Card, Placeholder, Responsive, Segment} from "semantic-ui-react";
import {Field, Form} from "react-final-form";
import {Slider} from "react-semantic-ui-range";

class editRobot extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onSubmit = values => {
        const updatedRobot = values;
        const { firestore, client, history } =this.props;
        firestore.update({collection:'clients',doc:client.id},updatedRobot).then(history.push('/viewRobots'));
    };

    render() {
        const {client  } = this.props;
        if(client){
            return (
                <Responsive>
                    <Segment>

                        <Form
                            onSubmit={this.onSubmit}
                            initialValues={{
                                robotId:client.robotId,
                                firstName:client.firstName,
                                lastName:client.lastName,
                                email:client.email,
                                notes:client.notes
                            }}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form className="ui form" onSubmit={handleSubmit}>
                                    <div className="fields">
                                        <div className="six wide field">
                                            <Card fluid>
                                                <Card.Header>
                                                    <label>Robot image</label>
                                                </Card.Header>
                                                <Card.Content>
                                                    {
                                                        values.robotId ==undefined ?<Placeholder fluid> <Placeholder.Image rectangular /> </Placeholder>:<img alt='robots' src={`https://robohash.org/${values.robotId}?200*200`}/>
                                                    }

                                                </Card.Content>
                                            </Card>
                                        </div>
                                        <div className=" ten wide field">
                                            <label>Angriness</label>

                                            <Field name="robotId" >
                                                {({ input, meta }) =>(

                                                    <Slider
                                                        {...input}

                                                        color="red"
                                                        settings={{
                                                            start: 2,
                                                            min: 0,
                                                            max: 100,
                                                            step: 1,
                                                            onChange:value =>{ input.onChange(value)}
                                                        }}
                                                    />


                                                ) }
                                            </Field>

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
                                        <label>Notes</label>
                                        <Field
                                            name="notes"
                                            component="textarea"
                                            placeholder="Notes"
                                        />
                                    </div>
                                    <div >
                                        <button className='ui primary basic button ' type="submit" disabled={submitting || pristine}>
                                            Submit
                                        </button>
                                        <button
                                            className='ui secondary basic button'
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
            )
        }else {
            return (
                <h1>hi</h1>
            )
        }

    }
}

editRobot.propTypes = {
    clients:PropTypes.array,
    firestore:PropTypes.object.isRequired,
};

export default compose(
    firestoreConnect( props =>[
        {collection:'clients',storeAs:'client',doc:props.match.params.id}
    ]),
    connect(({firestore:{ordered}}, props) => ({
        client: ordered.client && ordered.client[0]
    }))
)(editRobot);