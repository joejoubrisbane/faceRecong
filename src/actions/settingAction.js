import {
    DISABLE_ROBOTS_ON_ADD,
    DISABLE_ROBOTS_ON_EDIT,
    ALLOW_REGISTRATION
} from "../actions/types";

import React from 'react';



export const setDisableRobotsOnAdd = () => {
    //get the value from local storage
    const setting = JSON.parse(localStorage.getItem('setting'));
    //toggle
    setting.disableRobotsOnAdd = !setting.disableRobotsOnAdd;
    //return the value back to local storage
    localStorage.setItem('setting',JSON.stringify( setting))
    return {
        type:DISABLE_ROBOTS_ON_ADD,
        payload:setting.disableRobotsOnAdd,
    }
};
export const setDisableRobotsOnEdit = () => {
    const setting = JSON.parse(localStorage.getItem('setting'));
    //toggle
    setting.disableRobotsOnEdit = !setting.disableRobotsOnEdit;
    //return the value back to local storage
    localStorage.setItem('setting',JSON.stringify( setting));

    return {
        type:DISABLE_ROBOTS_ON_EDIT,
        payload:setting.disableRobotsOnEdit,
    }
};

export const setAllowRegistration = () => {
    const setting = JSON.parse(localStorage.getItem('setting'));
    //toggle
    setting.allowRegistration = !setting.allowRegistration;
    //return the value back to local storage
    localStorage.setItem('setting',JSON.stringify( setting));


    return {
        type:ALLOW_REGISTRATION,
        payload:setting.allowRegistration,
    }
};


