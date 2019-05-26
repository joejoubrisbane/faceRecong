import React, { Component } from "react";
import PropTypes from "prop-types";
import { Responsive, Segment ,Card, Placeholder } from "semantic-ui-react";
import { Form, Field, } from "react-final-form";
import {firestoreConnect} from "react-redux-firebase";

class CreateRobot extends Component {

    onSubmit = values => {
        const newRobot = values;
        const { firestore } =this.props;
        firestore.add({collection:'clients'},newRobot);
        window.alert(JSON.stringify(values, 0, 2));
    };
  render() {
    return (
      <Responsive>
        <Segment>

          <Form
            onSubmit={this.onSubmit}
            initialValues={{ stooge: "larry", employed: false }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form className="ui form" onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="six wide field">
                        <Card fluid>
                            <Card.Header>
                                <label>Robot image</label>
                            </Card.Header>
                            <Card.Content>
                                <Placeholder fluid>
                                    {
                                        values.robotId ==undefined ? <Placeholder.Image rectangular />:<img alt='robots' src={`https://robohash.org/${values.robotId}?200*200`}/>
                                    }


                                </Placeholder>
                            </Card.Content>
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
                      <label>Robot Image</label>
                      <Field name="robotId" >
                          {({ input, meta }) =>(
                              <input type='button' {...input} placeholder="Any number" onClick={()=>{input.value=1}} />

                          ) }
                      </Field>
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
                <div className="buttons">
                  <button type="submit" disabled={submitting || pristine}>
                    Submit
                  </button>
                  <button
                    type="button"
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

CreateRobot.propTypes = {};

export default firestoreConnect()(CreateRobot) ;
