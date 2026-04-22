import Counter from "../components/Counter";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
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
    <div style={{fontSize: fontSize + "px"}} >
      <h2>Dashboard</h2>
          <hr />
          <center>
           <Counter />
          <br />
      <button onClick={logout} style={{fontSize:"60%"}}  >Logout</button>
      </center>
      

 
    </div>
  );
}

export default Dashboard;