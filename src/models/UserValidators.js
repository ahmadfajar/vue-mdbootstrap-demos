import { required, email, minLength } from "vuelidate/lib/validators";

/**
 * UserModel Validator.
 *
 * @type {Object}
 */
export const userValidator = {
    fullName: {required, minLength: minLength(5)},
    email: {required, email},
    education: {required},
    address: {required},
    country: {required},
    state: {required},
}

/**
 * UserModel validation's handler.
 *
 * @param {string} field Field property name to validate
 * @return {Object} Validation handler
 */
export function userValidationHandler(field) {
    return {
        computed: {
            emailValidator() {
                return {
                    hasError: this.$v[field].email.$error,
                    messages: {required: this.requiredErrorMsg, email: this.emailErrorMsg},
                    validators: {required: this.$v[field].email.required, email: this.$v[field].email.email}
                }
            },
            fullNameValidator() {
                return {
                    hasError: this.$v[field].fullName.$error,
                    messages: {required: this.requiredErrorMsg, minLength: this.minLengthErrorMsg},
                    validators: {
                        required: this.$v[field].fullName.required,
                        minLength: this.$v[field].fullName.minLength
                    }
                }
            },
            educationValidator() {
                return {
                    hasError: this.$v[field].education.$error,
                    messages: {required: this.requiredErrorMsg},
                    validators: {required: this.$v[field].education.required}
                }
            },
            addressValidator() {
                return {
                    hasError: this.$v[field].address.$error,
                    messages: {required: this.requiredErrorMsg},
                    validators: {required: this.$v[field].address.required}
                }
            },
            countryValidator() {
                return {
                    hasError: this.$v[field].country.$error,
                    messages: {required: this.requiredErrorMsg},
                    validators: {required: this.$v[field].country.required}
                }
            },
            stateValidator() {
                return {
                    hasError: this.$v[field].state.$error,
                    messages: {required: this.requiredErrorMsg},
                    validators: {required: this.$v[field].state.required}
                }
            },
        }
    }
}
