import React from 'react';
import PropTypes from 'prop-types';

const Friend = (props) => {
    return (
        <div className="friend-card">
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <h4>Email: {props.friend.email}</h4>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    })
};

export default Friend;