import React, { Component } from "react";
import SignInHeader from "../components/SignInHeader";
import Sliders from "../components/Sliders";
import SignInForm from "../components/SignInForm";
class SignIn extends React.Component {
  render() {
    return (
      <div>
        <SignInHeader />
        <SignInForm />
      </div>
    );
  }
}

export default SignIn;
