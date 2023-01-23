import React from "react";
import Header from "../HeaderFooter/header";
import "./login.css";

const registerUrl = "http://localhost:5000/api/auth/register";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = () => {
    fetch(registerUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(this.props.history.push("/"));
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1 className="login-heading">Register</h1>
          <form className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name" className="input-headings">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={this.state.name}
                className="form-control input-box"
                id="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email" className="input-headings">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your email"
                value={this.state.email}
                className="form-control input-box"
                id="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password" className="input-headings">
                Password
              </label>
              <input
                type="text"
                name="password"
                placeholder="Enter Your Password"
                value={this.state.password}
                className="form-control input-box"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone" className="input-headings">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={this.state.phone}
                className="form-control input-box"
                id="phone"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn register-btn" onClick={this.handleSubmit}>
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
