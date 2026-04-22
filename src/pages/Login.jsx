import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  

    handleResize(); // run on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
         <center>
       <h2>Login</h2>
     <p style={{fontSize:"3vw"}}> Enter your Email here: </p> <input type="email"  placeholder="....@gmail.com" onChange={(e) => setEmail(e.target.value)} style={{fontSize:"3vw"}} />
      <br />
     <p style={{fontSize:"3vw"}}> Enter your Password here:</p>
      <input type="password"  placeholder="123...." onChange={(e) => setPassword(e.target.value)} style={{fontSize:"3vw"}} />
      <p style={{fontSize:"3vw"}}>  Don't have an account? 
      <p  onClick={() => navigate("/auth")} style={{color:"blue",fontSize:"3vw", display:"inline"}}> Sign Up </p>
      </p>
   
       <button style={{width:"30%", height:"7vh", alignItems:"center",borderRadius:"20vh", backgroundColor:"blue", color:"white",}}  >Login</button>
      </center>
    </div>
  );
}

export default Login;
