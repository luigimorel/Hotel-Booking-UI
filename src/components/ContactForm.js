import React from "react";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,

      formErrors: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
    this.handleChange = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (name) {
      case "firstName":
        formErrors.firstName = value.length === 0 ? "Name can't be blank" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length === 0 ? "Name field can't be blank" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Password must be greater than 6 characters" : "";
        break;
      case "confirmPassword":
        formErrors.confirmPassword =
          value.length === formErrors.password.length
            ? "Passwords don't match"
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Send us a message...</h1>
          <h6>
            You would like to book a room or inform us about a reservation,
            please fill in this form.
            <br /> We will get back to you in the shortest time possible...
          </h6>
          <form onSubmit={this.handelSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "errors" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            {/*End of first name div */}
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "errors" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            {/*End of the last name field */}
            {/*Start of the email field */}
            <div className="email">
              <label htmlFor="email">Enter your email</label>
              <input
                className={formErrors.email.length > 0 ? "errors" : null}
                placeholder="Email"
                type="text"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            {/* Start of the textarea field */}
            <div className="message">
              <label htmlFor="message">Enter your message</label>
              <textarea
                cols="10"
                rows="10"
                placeholder="Type your message here...."
              ></textarea>
            </div>
            {/*End of the text area field */}
            <div className="createAccount">
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
