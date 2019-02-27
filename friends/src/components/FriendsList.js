import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
    return (
        <div>
            <h1>These are all the friends in my #CodeFam!</h1>
            {props.friends.map(friend => (
                <Friend />
            ))}
        </div>
    );
}

export default FriendsList;