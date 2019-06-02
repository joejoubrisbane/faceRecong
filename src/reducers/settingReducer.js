import React from "react";
import PropTypes from "prop-types";
import {
  DISABLE_ROBOTS_ON_ADD,
  DISABLE_ROBOTS_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";


export default (state={},action) =>{
    switch (action.type) {
        case DISABLE_ROBOTS_ON_ADD:
            return{
                ...state,
                disableRobotsOnAdd: action.payload,
            };
        case DISABLE_ROBOTS_ON_EDIT:
            return{
                ...state,
                disableRobotsOnEdit: action.payload,
            };
        case ALLOW_REGISTRATION:
            return{
                ...state,
                allowRegistration: action.payload,
            };
        default:
            return state;

    }

}
