import SignUpForm from "../../Components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component.jsx";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google Popup
      </Button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
