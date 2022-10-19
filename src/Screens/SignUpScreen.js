import React,{useRef} from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
function SignUpScreen(){

  const emailRef = useRef(null);
  const passwordRef =  useRef(null);

const register =(e)=>{
  e.preventDefault();
  auth.createUserWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser) =>{
    console.log(authUser);
  })
  .catch((error)=>{
    alert(error.message);
  });
};

const signIn = (e) => {
  e.preventDefault();
  auth.signInWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser) =>{
    console.log(authUser);
  })
  .catch((error)=>{
    alert(error.message);
  });
}

  return (
    <div className="signUpScreen">
      <div>
        <form id="signUp__form">
          <h1>Sign in</h1>
          <input ref={emailRef} type="email" placeholder="Email or phone number" />
          <input ref={passwordRef} type="password" name="" id="" placeholder="Password" />
          <button type="submit" onClick={signIn}>Sign In</button>
          <h4>
            <span className="form_grey">New to Netflix?</span>
            <span className="form_link" onClick={register}>sign up now</span>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;
