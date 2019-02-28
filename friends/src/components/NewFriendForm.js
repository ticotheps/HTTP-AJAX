import React from 'react';

class NewFriendForm extends React.Component {
    state = {
        friend: {
            name: "",
            id: "",
            age: "",
            email: ""
        }
    }

    render() {
        return (
            <div className="new-friend-form-container">
                <h2 className="add-friend-header">Add a New Friend Below!</h2>
                <form className="new-friend-form">
                    <div className="friend-name-input-area">
                        <label for="friend-name">Name: </label>
                        <input 
                            id="friend-name"
                            type="text" 
                            name="name"
                            placeholder="Name"
                            value={this.state.friend.name}
                        />
                    </div>
                    <div className="friend-age-input-area">
                        <label for="friend-age">Age: </label>
                        <input 
                            id="friend-age"
                            type="number" 
                            name="age"
                            placeholder="Age"
                            value={this.state.friend.age}
                        />
                    </div>
                    <div className="friend-email-input-area">
                        <label for="friend-email">Email: </label>
                        <input 
                            id="friend-email"
                            type="text" 
                            name="email"
                            placeholder="Email"
                            value={this.state.friend.email}
                        />
                    </div>
                    <button className="save-button">Save</button>
                </form>
            </div>
        );
    }
}

export default NewFriendForm;