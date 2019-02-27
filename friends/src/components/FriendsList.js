import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
    return (
        <div className="friends-list-container">
            <h1 className="friends-list-header">These are the friends in my #LamFam!</h1>
            {props.friends.map(friend => (
                <Friend key={friend.id} friend={friend}/>
            ))}
        </div>
    );
}

export default FriendsList;