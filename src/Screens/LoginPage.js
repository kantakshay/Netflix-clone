import React, { useState } from "react";
import "./LoginPage.css";
import SignUpScreen from './SignUpScreen'

function LoginPage() {
  const [signIn, setSignIn] = useState(false);

  const signInHandler = () => {
    setSignIn(true);
  };

  return (
    <div className=" loginScreen ">
      <div className=" loginScreen__background ">
        <img
          className=" loginScreen__logo "
          src=" https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png "
          alt=" "
        />
        <button onClick={signInHandler} className="LoginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="LoginScreen__input"></div>
              <form>
                <input
                  className="LoginScreen__Email"
                  type="email"
                  placeholder="Email address"
                />
                <button
                  onClick={signInHandler}
                  className="LoginScreen__getStarted"
                >
                  Get Started{" "}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
