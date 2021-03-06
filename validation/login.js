const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.username = validText(data.username) ? data.username : '';
    data.password = validText(data.password) ? data.password : '';

    if (Validator.isEmpty(data.username)) {
        errors.username = '* A username is required. *';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = '* A password is required. *';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};