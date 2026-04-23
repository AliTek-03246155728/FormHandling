import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const handleLogin = () => {
    // login page will lead you to dashboard as
  if (!email || !password) {
    alert("Please fill all fields!");
    return;
  }

  navigate("/dashboard");
};

  return (
    <div>
         <center>
       <h2>Login</h2>
     <p style={{fontSize:"3vw"}}> Enter your Email here: </p> <input type="email"  placeholder="....@gmail.com" onChange={(e) => setEmail(e.target.value)} style={{fontSize:"2.5vw"}} />
      <br />
     <p style={{fontSize:"3vw"}}> Enter your Password here:</p>
      <input type="password"  placeholder="123...." onChange={(e) => setPassword(e.target.value)} style={{fontSize:"2.5vw"}} />
      <p style={{fontSize:"3vw"}}>  Don't have an account? 
      <p  onClick={() => navigate("/auth")} style={{color:"blue",fontSize:"3vw", display:"inline"}}> Sign Up </p>
      </p>
   
       <button style={{width:"3vw", alignItems:"center",borderRadius:"20vh", backgroundColor:"blue", color:"white" , fonSize:"100%"}} >Login</button>
      </center>
    </div>
  );
}

export default Login;
