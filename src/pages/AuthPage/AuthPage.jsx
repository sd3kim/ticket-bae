import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <main className="AuthPage">
        <div>
          <h3
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}
          >
            {this.state.showLogin ? "GO TO LOG IN PAGE" : "GO TO SIGN UP PAGE"}
          </h3>
        </div>
        {this.state.showLogin ? (
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpForm setUserInState={this.props.setUserInState} />
        )}
      </main>
    );
  }
}
