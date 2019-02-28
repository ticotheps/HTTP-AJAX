import React from 'react';

class NewFriendForm extends React.Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: ""
        }
    }

    changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === "age") {
            value = parseInt(value);
        }
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value
            }
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addFriend(e, this.state.friend);

        this.setState({
            friend: {
                name: "",
                age: "",
                email: ""
            }            
        });
    }

    render() {
        return (
            <div className="new-friend-form-container">
                <h2 className="add-friend-header">Add a New Friend Below!</h2>
                <form className="new-friend-form" onSubmit={this.handleSubmit}>
                    <div className="friend-name-input-area">
                        <input 
                            type="text" 
                            name="name"
                            onChange={this.changeHandler}
                            placeholder="Name"
                            value={this.state.friend.name}
                        />
                    </div>
                    <div className="friend-age-input-area">
                        <input 
                            type="number" 
                            name="age"
                            onChange={this.changeHandler}
                            placeholder="Age"
                            value={this.state.friend.age}
                        />
                    </div>
                    <div className="friend-email-input-area">
                        <input 
                            type="text" 
                            name="email"
                            onChange={this.changeHandler}
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