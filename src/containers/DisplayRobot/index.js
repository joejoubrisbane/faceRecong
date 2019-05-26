import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardList from "../../components/CardList";
import SearchBox from "../../components/SearchBox";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import _ from 'lodash';
import Scroll from '../../components/Scroll';

class DisplayRobot extends Component {
    constructor(props) {
        super(props);
        this.state = {

            searchfield: ""
        };
    }
    onSearchChange = event => {
        this.setState({ searchfield: event.target.value });
    };
    render() {

        const { clients } = this.props;
        const filteredRobots =_.filter(clients, (robot)=>( robot.name.toLocaleLowerCase()
            .includes(this.state.searchfield.toLocaleLowerCase())));
        return (
            <div>
                <h1 className='f1'>Robot Friends</h1>
                <Scroll>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
                </Scroll>

            </div>
        );
    }
}

DisplayRobot.propTypes = {};

export default compose(
    firestoreConnect([{ collection: "clients" }]),
    connect((state, props) => ({
        clients: state.firestore.ordered.clients
    }))
)(DisplayRobot);
