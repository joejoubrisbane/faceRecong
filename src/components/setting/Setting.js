import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Header,
  Image,
  Form,
  Message,
  Segment,
  Card,
  Input
} from "semantic-ui-react";
import { connect } from "react-redux";

import {
  setDisableRobotsOnAdd,
  setDisableRobotsOnEdit,
  setAllowRegistration
} from "../../actions/settingAction.js";
import classNames from "classnames";

import Alert from "../layout/Alert";

class Setting extends Component {
  // onSetAllowRegistration=()=>{
  //     const {setAllowRegistration} =this.props;
  //     setAllowRegistration();
  // }
  render() {
    const {
      disableRobotsOnAdd,
      disableRobotsOnEdit,
      allowRegistration
    } = this.props.setting;
    const {
      setDisableRobotsOnAdd,
      setDisableRobotsOnEdit,
      setAllowRegistration
    } = this.props;
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>

            <Header as='h2' color='teal' textAlign='center'>
                <Link to={"/viewRobots"}>Back to View Robots</Link>
            </Header>

        <Card fluid>
          <Card.Header>Edit Setting</Card.Header>
          <Card.Content>
            <Form>
              <Form.Checkbox
                label={"Allow Registration"}
                checked={!!allowRegistration}
                onChange={setAllowRegistration}
              />
              <Form.Checkbox
                label={"Disable add robots "}
                checked={!!disableRobotsOnAdd}
                onChange={ setDisableRobotsOnAdd}
              />
              <Form.Checkbox
                label={"Disable edit robots"}
                checked={!!disableRobotsOnEdit}
                onChange={setDisableRobotsOnEdit}
              />
            </Form>
          </Card.Content>
        </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

Setting.propTypes = {
  setting: PropTypes.object.isRequired,
  setDisableRobotsOnAdd: PropTypes.func.isRequired,
  allowRegistration: PropTypes.func.isRequired
};
const mapStateToProps = (state, props) => ({
  auth: state.firebase.auth,
  setting: state.setting
});
export default connect(
  mapStateToProps,
  {
    setDisableRobotsOnAdd,
    setDisableRobotsOnEdit,
    setAllowRegistration
  }
)(Setting);
