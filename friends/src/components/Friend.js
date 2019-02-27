import React from 'react';

const Friend = (props) => {
    return (
        <div className="friend-card">
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <h4>Email: {props.friend.email}</h4>
        </div>
    );
}

export default Friend;