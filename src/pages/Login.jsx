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
  const [fontSize, setFontSize] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setFontSize(18);
      } else if (window.innerWidth <= 900) {
        setFontSize(24);
      } else {
        setFontSize(40);
      }
    };

    handleResize(); // run on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
         <center>
       <h2>Login</h2>
     <p style={{fontSize:"2vw"}}> Enter your Email here: </p> <input type="email"  placeholder="....@gmail.com" onChange={(e) => setEmail(e.target.value)} style={{fontSize:"2vw"}} />
      <br />
     <p style={{fontSize:"2vw"}}> Enter your Password here:</p>
      <input type="password"  placeholder="123...." onChange={(e) => setPassword(e.target.value)} style={{fontSize:"2vw"}} />
      <p style={{fontSize:"2vw"}}>  Don't have an account? 
      <p  onClick={() => navigate("/auth")} style={{color:"blue",fontSize:"4vw", display:"inline"}}> Sign Up </p>
      </p>
   
       <button onClick={handleLogin} style={{width:"30%", height:"4vh", alignItems:"center",borderRadius:"20vh", backgroundColor:"blue", color:"white", fontSize: fontSize + "px"}}  >Login</button>
      </center>
    </div>
  );
}

export default Login;
