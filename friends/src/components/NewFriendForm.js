import React from 'react';

const NewFriendForm = () => {
    return (
        <div className="new-friend-form-container">
            <h2 className="add-friend-header">Add a New Friend Below!</h2>
            <form className="new-friend-form">
                <div className="friend-name-input-area">
                    <label for="friend-name">Name: </label>
                    <input type="text" id="friend-name" />
                </div>
                <div className="friend-age-input-area">
                    <label for="friend-age">Age: </label>
                    <input type="text" id="friend-age" />
                </div>
                <div className="friend-email-input-area">
                    <label for="friend-email">Email: </label>
                    <input type="text" id="friend-email" />
                </div>
                <button className="save-button">Save</button>
            </form>
        </div>

    );
}

export default NewFriendForm;