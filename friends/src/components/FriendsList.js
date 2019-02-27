import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendsList = (props) => {
    return (
        <div className="friends-list-container">
            {props.friends.map(friend => (
                <Friend key={friend.id} friend={friend}/>
            ))}
        </div>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            age: PropTypes.number,
            email: PropTypes.string
        })
    )
};

export default FriendsList;