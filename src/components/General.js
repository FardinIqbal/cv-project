import React, {Component} from "react";

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            submitted: false,
        };
    }
    changeSubmittedStatus = () => {
        this.setState({
            submitted: !this.state.submitted,
        });
    };

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handlePhoneNumberChange = (e) => {
        this.setState({
            phoneNumber: e.target.value,
        });
    };

    handleEdit = (e) => {
        this.changeSubmittedStatus();
    };

    onSubmitGeneralInfo = (e) => {
        e.preventDefault();
        this.setState({
            submitted: true,
        });
    };

    render() {
        const {name, email, phoneNumber} = this.state;
        
        if (this.state.submitted) {
            return (
                <div>
                    <ul>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{phoneNumber}</li>
                    </ul>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.onSubmitGeneralInfo}>
                        <label htmlFor="name">Name</label><br/>
                        <input onChange={this.handleNameChange} type="text" id={"name"}/> <br/>

                        <label  htmlFor="email">Email</label><br/>
                        <input onChange={this.handleEmailChange} type="email" id={"email"}/><br/>

                        <label htmlFor="phone-number">Phone Number</label><br/>
                        <input onChange={this.handlePhoneNumberChange} type="number" id={"phone-number"}/><br/>

                        <button type={"submit"}>Submit</button>
                        <button onClick={this.handleEdit}>Edit</button>
                    </form>
                </div>
            )
        }
    }
}

export default General;