//This file is to check validity of inputs

//check if parameter is empty string
function isEmpty(text) {
    if (text.trim() === "") return true;
    else return false;
}
//check if email/password is empty
function emptyLogin(data) {
    let err = {};
    if (isEmpty(data.email)) err.email = "Email cannot be empty";
    if (isEmpty(data.password)) err.password = "Password cannot be empty";
    return {
        err,
        valid: Object.keys(err).length === 0 ? true : false,
    };
}

function validateSignUpData(data) {
	let err = {};

    //checks email address contains @
    const emailRegEx = /\S+@\S+\.\S+/;
	if (isEmpty(data.email)) {
		err.email = 'Must not be empty';
	} else if (!data.email.match(emailRegEx)) {
		err.email = 'Must be valid email address';
	}

	if (isEmpty(data.password)) {
        err.password = 'Must not be empty';
    } 

	return {
		err,
		valid: Object.keys(err).length === 0 ? true : false
	};
};

module.exports = {
    emptyLogin,
    validateSignUpData
};
