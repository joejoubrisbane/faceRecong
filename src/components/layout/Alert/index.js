import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';

const Alert = ({ message, messageType }) => {

    return (
        <div className={classNames('ui message',{
            positive: messageType === 'success',
            negative: messageType === 'error',
        })}>
            <div className="header">
                {message}
            </div>

        </div>
    );
};

Alert.propTypes = {

};

export default Alert;
