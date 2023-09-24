import "./App.css";
import "./screen2.css";
import image from "./img/AK_logo.png";
import OtpScreen2 from "./OtpScreen2";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import LoginSuccess from "./LoginSuccess";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const [otp, setotp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(true);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("Otp sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div className="App  screen1">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {!user ? (
          <LoginSuccess />
        ) : (
          <div>
            {showOTP ? (
              <OtpScreen2 />
            ) : (
              
              <section className="screen1">
                <div className="logo">
                  <img src={image} className="image1" alt="Image description" />
                  <div className="welcome">
                    <h1>Welcome Back</h1>
                    <p>Please sign in into your account</p>

                    <div className="border-text">
                      <PhoneInput
                        placeholder="Enter correct number"
                        country={"in"}
                        value={ph}
                        onChange={setPh}
                        required="required"
                        autoFocus
                        inputStyle={{
                          outline: "none",
                          position: "relative",
                          maxWidth: "100%"
                        }}
                      />
                      <span>Enter Contact Number</span>
                    </div>
                    <div className="welcome3">
                      <p>We will send you a one time SMS message.</p>
                      <div className="welcome2">
                        <p>Charge may apply.</p>
                      </div>
                    </div>
                    <button onClick={onSignup} className=" btn-screen1">
                      {loading && <CgSpinner size={20} className="cgs" />}
                      <span>Sign in with otp</span>
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
