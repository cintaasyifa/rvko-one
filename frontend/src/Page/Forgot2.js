// import { useNavigate } from "react-router-dom";
import { React } from "react";
// import axios from "axios";
import "../Forgoto.css";
import Back from "../Asset/star.png";
import Arrow from "../Asset/arrow.png";
// import Eye from "../Asset/eye.png"

const Forgot2 = () => {
  return (
    <div className="Register-container">
      <form >
      <div className="cube">
        <img src={Arrow} alt="arrow" className="arrow"/>
        <img src={Back} alt="back" className="back" />
        <div className="cube2">
            <h2>Forgot Passwoard</h2>
            <div className="cube-paragraf">
                <p>Enter Your Email Adress to Recieve a Verivication Cord</p>
            </div>
        <input
            type="text"
            name="email-forgot"
            placeholder="Email Adress"
          />
          <br />
        <br />
        <button type="submit">Send</button>
        
        <br />
        </div>
      </div>
     </form>
    </div>
  );
};

export default Forgot2;