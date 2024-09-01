//Child Form
import React from "react";

export default class LoginForm extends React.Component {

    onTrigger = (event) => {
        console.log('1. child  got triggered')
        // Call the parent callback function
        this.props.parentCallback(
           
            event.target.UserName.value
        );
        event.preventDefault();
        //Utilized within event handlers, it lets you control the default actions the browser typically executes.
        // This control over events, specifically form
        // submissions, is essential for creating a dynamic
        // and responsive React app
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onTrigger}>
                    <input  type="text" name="UserName"
                        placeholder="Enter User Name"
                    />
                    <br/>
                    <input type="submit" value="Submit" />
                    <br/>
                </form>
            </div>
        );
    }

}