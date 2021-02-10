import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loginCheck } from "../redux/action/loginAction"

class LoginPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: ""
        }
    }
   
    // this need to be validated from authentication API
     validateUser() {
       const { login } = this.props;
       const { email, password } = this.state;
       return login && login[0].username === email && login[0].password === password;
    }
      onHandleSubmit = async (event) => {
        event.preventDefault();
        await this.props.loginCheck();
        this.validateUser()
        ? this.props.history.push("/employeeList")
        : this.setState({ message: "Invalid E-mail address or password" });
        console.log(this.state);
    }
    render() {
        return (
            <div className="ui raised very padded text container segment">
                <h3 className="ui header">Login</h3>
                <div> {this.state.message
                    ? <div className="ui red basic label">{this.state.message}</div>
                    : ""}
                </div>
                <form className="ui form" onSubmit={this.onHandleSubmit}>
                    <div className="field">
                        <label>Enter E-mail address or username</label>
                        <input 
                            type="email"
                            placeholder="E-mail or username"
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Enter password</label>
                        <input type="password"
                            placeholder="password"
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="ui secondary button">Login</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        login: state.login.loginData
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ loginCheck }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);