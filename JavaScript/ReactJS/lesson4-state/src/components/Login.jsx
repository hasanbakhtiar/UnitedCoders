import React, { Component } from "react";
import userdata from "../data/users";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputEmail: "",
      inputPass: "",
      alertText: "",
      alertStyle: "",
    };
  }

  checkForm = (e) => {
    e.preventDefault();
    if (!this.state.inputEmail || !this.state.inputPass) {
      this.setState({
        alertText: "please, fill out input!",
        alertStyle: "warning",
      });
    }else{
            if (this.state.inputEmail === userdata.email && this.state.inputPass === userdata.pass) {
                this.setState({
                    alertText: "login  successfull!",
                    alertStyle: "success",
                  }); 
            }else{
                this.setState({
                    alertText: "password or email is wrong!",
                    alertStyle: "danger",
                  }); 
            }
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center my-5">Login</h1>

        <div className="d-flex align-items-center justify-content-center">
          <div className="col-6">
            <p className={`text-center alert alert-${this.state.alertStyle}`}>
              {this.state.alertText}
            </p>
            <form onSubmit={this.checkForm}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ inputEmail: e.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <div className="input-group mb-3">
            <input  onChange={(e) => {
                    this.setState({ inputPass: e.target.value });
                  }} type="password" className="form-control"  />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa-solid fa-eye"></i></button>
            </div>


            
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
