import React, { Component } from "react";
import PropTypes from "prop-types";
import { Responsive, Segment ,Card, Placeholder } from "semantic-ui-react";
import { Form, Field, } from "react-final-form";
import {firestoreConnect} from "react-redux-firebase";
import { Slider } from 'react-semantic-ui-range'
class CreateRobot extends Component {

    onSubmit = values => {
        const newRobot = values;
        const { firestore,history } =this.props;
        firestore.add({collection:'clients'},newRobot)
            .then(history.push('/viewRobots'))
            .catch(err=>console.log(err));
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
    );
  }
}

CreateRobot.propTypes = {
    firestore:PropTypes.object.isRequired,
};

export default firestoreConnect()(CreateRobot) ;
