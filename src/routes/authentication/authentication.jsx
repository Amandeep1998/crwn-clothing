import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";

import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import "./authentication.scss";

const Authentication = () => {
  //   useEffect(() => {
  //     (async () => {
  //       //Put your logic here
  //       const response = await getRedirectResult(auth);
  //       console.log(response);
  //       if (response) {
  //         const userDocRef = createUserDocumentFromAuth(response.user);
  //       }
  //     })();
  //   }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In WIth Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
