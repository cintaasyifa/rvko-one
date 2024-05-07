import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import axios from "axios";
import "../Codeotp.css"
import Back from "../Asset/star.png";
import Arrow from "../Asset/arrow.png";
// import Eye from "../Asset/eye.png"

const CodeOtp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/register", {
        email,
      });
      navigate("/register");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Register-container">
      <form onSubmit={handleSubmit}>
      <div className="cube">
        <div class="black-box"></div>
        <div class="white-box">
            <p className="white-pbox">Code OTP</p>
        <div class="otp-input-container">
            <input type="text" maxlength="1" id="digit1"  />
            <input type="text" maxlength="1" id="digit2"  />
            <input type="text" maxlength="1" id="digit3"  />
            <input type="text" maxlength="1" id="digit4"  />
        </div>
            <p className="white-pbox2">Resend code</p>
            
            <button className="button2" type="submit">Verify</button>
        </div>

        <img src={Arrow} alt="arrow" className="arrow"/>
        <img src={Back} alt="back" className="back" />
        <div className="cube2">
            <h2>Forgot Passwoard</h2>
            <div className="cube-paragraf">
                <p>Enter Your Email Adress to Recieve a Verivication Cord</p>
            </div>
        <input
            type="text"
            name="email"
            onChange={handleChange}
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

export default CodeOtp;