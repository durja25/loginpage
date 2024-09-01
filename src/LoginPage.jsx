// Parent Page
import React from "react";
import LoginForm from "./LoginForm";

export default class LoginPage extends React.Component {
    state = {
        name: "",
        validate: false
    };
    // Callback function to handle data received from the child component
    handleCallback = (childData) => {
        // Update the name in the component's state
        if (childData === 'ganesh') {
            this.setState({ validate: true });
        }else {
            this.setState({ validate: false });
        }
        console.log('2. parent  got triggered' + childData);
        this.setState({ name: childData });
    };

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>welcome Login Page</h1>
                <LoginForm parentCallback={this.handleCallback} />
                {this.state.validate ? (
                    <h1><p>   Welcome {name} </p></h1>
                ) : (
                    <h1>Invalid User Entered</h1>
                )}
            </div>
        );


    }
}
