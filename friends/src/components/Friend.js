import React from 'react';
import PropTypes from 'prop-types';

const Friend = (props) => {
    return (
        <div className="friend-card">
            <h2>Name: {props.friend.name}</h2>
            <h2>Age: {props.friend.age}</h2>
            <h4>Email: {props.friend.email}</h4>
            <div className="friend-buttons-container">
                <button 
                    onClick={e => props.deleteFriend(e, props.friend.id)} 
                    className="friend-delete-button"
                >
                Delete Friend
                </button>
                <button className="friend-update-button">Update Details</button>
            </div>

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