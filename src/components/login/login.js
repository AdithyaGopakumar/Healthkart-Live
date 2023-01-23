import React from "react";
import Header from "../HeaderFooter/header";
import "./login.css";

const loginUrl = "http://localhost:5000/api/auth/login";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(loginUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.auth === false) {
          this.setState({ message: data.token });
        } else {
          sessionStorage.setItem("token", data.token);
          this.props.history.push("/");
        }
      });
  };

  render() {
    // console.log(this.props.history);
    return (
      <>
        <Header />
        <div className="container">
          <h1 className="login-heading">Login</h1>
          <h3>{this.state.message}</h3>
          <form className="row">
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

            <button className="btn register-btn " onClick={this.handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
