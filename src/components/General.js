import React, {useState} from "react";

function General() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(false);
    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }

    function changeSubmitStatus(e) {
        e.preventDefault();
        setSubmitStatus(!submitStatus);
    }


    function displayGeneralInfo() {
        return (
            <ul>
                <li>{name}</li>
                <li>{email}</li>
                <li>{phoneNumber}</li> <br/>
                <button onClick={changeSubmitStatus}>Edit</button>
            </ul>
        );
    }

    function displayGeneralInfoForm() {
        return (
            <form onSubmit={changeSubmitStatus}>
                <label htmlFor="name">Name:</label> <br/>
                <input
                    value={name}
                    id={"name"}
                    onChange={handleNameChange}
                />
                <br/>

                <label htmlFor="email">Email:</label> <br/>
                <input
                    value={email}
                    id={"email"}
                    onChange={handleEmailChange}
                />
                <br/>

                <label htmlFor="phoneNumber">Phone Number</label> <br/>
                <input
                    value={phoneNumber}
                    id={"phoneNumber"}
                    onChange={handlePhoneNumberChange}
                />
                <br/><br/>

                <button type={"submit"}>Submit</button>
            </form>
        );
    }
    return (
        <div className={"general"}>
            {submitStatus ? displayGeneralInfo() : displayGeneralInfoForm()}
        </div>
    )
}

export default General;