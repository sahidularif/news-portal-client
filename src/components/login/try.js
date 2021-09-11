const handleFormValidation = () => {
    const { studName, emailId, dob, gender, phoneNumber, city } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //Student name     
    if (!studName) {
        formIsValid = false;
        formErrors["studNameErr"] = "Name is required.";
    }

    //Email    
    if (!emailId) {
        formIsValid = false;
        formErrors["emailIdErr"] = "Email id is required.";
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {

        formIsValid = false;
        formErrors["emailIdErr"] = "Invalid email id.";
    }

    //DOB    
    if (!dob) {
        formIsValid = false;
        formErrors["dobErr"] = "Date of birth is required.";
    }
    else {
        var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
        if (!pattern.test(dob)) {
            formIsValid = false;
            formErrors["dobErr"] = "Invalid date of birth";
        }
    }

    //Gender    
    if (gender === '' || gender === "select") {
        formIsValid = false;
        formErrors["genderErr"] = "Select gender.";
    }

    //Phone number    
    if (!phoneNumber) {
        formIsValid = false;
        formErrors["phoneNumberErr"] = "Phone number is required.";
    }
    else {
        var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
        if (!mobPattern.test(phoneNumber)) {
            formIsValid = false;
            formErrors["phoneNumberErr"] = "Invalid phone number.";
        }
    }

    //City    
    if (city === '' || city === "select") {
        formIsValid = false;
        formErrors["cityErr"] = "Select city.";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
}
