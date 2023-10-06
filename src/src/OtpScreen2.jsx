import React, { useState } from "react";
import OtpInput from "otp-input-react";
import "./screen2.css";
import { CgSpinner } from "react-icons/cg";
import LoginSuccess from "./LoginSuccess";
import image from "./img/screen2.png";
import "./App.css";

function OtpScreen2() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [otpError, setOtpError] = useState(null); // Added new state variable to keep track of OTP error

  function onOTPVerify() {
    if (!window.confirmationResult) {
      console.error("Confirmation result is not defined.");
      // Handle this situation gracefully, e.g., display an error message to the user.
      return;
    }
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setOtpError("Incorrect OTP. Please try again."); // Set otpError state variable when OTP is incorrect
      });
  }

  return (
    <div>
      {user ? (
        <LoginSuccess />
      ) : (
        <div className="screen2">
          <label htmlFor="otp">
           <div className="logo2">
              <img src={image} alt="Image loading" />

           </div>
           <div className="screen2-text">
            <h1>Please verify Mobile number</h1>
            <div className="screen2-para1">
            <p>An otp is sent to your number </p>

            </div>
            <div className="screen2-para2">
            <p><a href="/" onClick={() => setShowOTP(false)}>Change Phone Number</a></p>
            </div>

           </div>
            
          </label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            OTPLength={6}
            otpType="number"
            disabled={false}
            autoFocus
            className="otp-container"
          ></OtpInput>
            {otpError && <p className="error-message">{otpError}</p>}  {/*// Render error message if otpError is not null*/}
          <div className="screen2-para3">
            <p>
              Don't receive the code? <span>Resend</span>
            </p>
          </div>
          <div>
            <button onClick={onOTPVerify} className="btn-screen2">
              {loading && <CgSpinner size={20} className="cgs" />}

              <span>Verify</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtpScreen2;
