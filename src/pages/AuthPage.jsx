import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [mode, setMode] = useState("signup");
  const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [resPass, setResPass] = useState("");
  const handleSignUp = () => {
    // login page will lead you to dashboard as
  if (!email || !password) {
    alert("Please fill all fields!");
    return;
  }

 setMode("verify") ;
};
const handleReset= () => {
  //it will show the result
if (!resPass) {
    alert("Please enter your new password!");
    return;
  }

 alert ("your password is created now you can go back and login or create a new account(optional).")
};

  const handleSuccess = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <center>
      {mode === "signup" && (
        <div>
          <h2 style={{fontSize:"5vw",color:"purple"}}>Sign Up</h2>
          <input type="email" placeholder="Email" style={{fontSize:"2vw"}} onChange={(e) => {
           setEmail(e.target.value) }} /><br /><br />
          <input type="password" placeholder="Password" style={{fontSize:"2vw"}} onChange={(e) => setPassword(e.target.value)} /><br /><br />
          <button onClick={handleSignUp} style={{fontSize:"3vw"}}>
            Create Account
          </button> <br /><br />
          <button onClick={() => setMode("forgot")} style={{cursor:"pointer", fontSize:"3vw"}}>
            Forgot Password?
          </button>
          <br /><br />
          <button onClick={() => navigate("/")} style={{cursor:"pointer", fontSize:"3vw"}}>
            Back to Login
          </button>
        </div>
      )}
      {mode === "forgot" && (
        <div>
          <p style={{fontSize:"3vw",color:"purple"}}>Forgot Password</p>
          <input type="password" placeholder="Enter your new password" style={{fontSize:"2vw"}} onChange={(e) => setResPass(e.target.value)} /><br /><br />
          <button onClick={handleReset} style={{fontSize:"3vw"}}>Create new Password</button><br /><br />
          <button onClick={() => setMode("signup")} style={{cursor:"pointer",fontSize:"3vw"}}>
            Back to Sign Up
          </button>
          
        </div>
      )}
      {mode === "verify" && (
        <div>
          <h2 style={{fontSize:"4vw"}}>Verify Email</h2>
          <p style={{fontSize:"4vw"}}>Check your email and click verify</p>

          <button onClick={handleSuccess} style={{fontSize:"4vw"}}>
            I Verified
          </button>
        </div>
      )}
      </center>
    </div>
  );
}

export default AuthPage;
