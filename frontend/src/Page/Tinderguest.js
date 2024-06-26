import React, { useState } from "react";
import '../tinderguest.css';
import Logo from "../Asset/logo.png";
import Back from "../Asset/star.png";
import Tutorial from "../Asset/tutorial.png";

const Tinderguest = () => {
  const [images, setImages] = useState([
    { imageUrl: "https://storage.googleapis.com/rvko-11.appspot.com/foto/gambar1.jpg?GoogleAccessId=firebase-adminsdk-e35xz%40rvko-11.iam.gserviceaccount.com&Expires=16730298000&Signature=drtdRjuv2nAemrhj94ns%2BzrcKBRXRrcfvb70q9uyA89bhsk898CI%2FYJN973ogI903FAAec7RIQ7Zp8sLmPjzpICR8p%2FgCt0n510MU%2FxZ11pen%2BlAGJxUmc7KrE5a9Hgr4tL4KRe8N6qTpyXzAVFQ0YJRStQGLAqbBcZzYKerH0F49xJCVnz9edPdHThACrqnuSnKJEWGlUeRojAKzHEQXcQl%2B2EIsmKoxcJiR%2FWYcj4Zyf%2FZL%2FAf8qT8l%2BoSAhkAdmuZKDAIp%2BlMfStBGBzQQ1qJ5lprAfwBnQTiUpZaezmaoGxDoHJvyMUM%2FjYW4wqB7MUDDJ8xvw1g4n1VqQOU8w%3D%3D", like: 0, dislike: 0 },
    { imageUrl: "https://storage.googleapis.com/rvko-11.appspot.com/foto/gambar2.jpg?GoogleAccessId=firebase-adminsdk-e35xz%40rvko-11.iam.gserviceaccount.com&Expires=16730298000&Signature=ezegJtjMXHegENi7e2H1E0NUUNcWKn05cmCFdDJnwCRNDi9JmcRywPUvOXejCfwnUxko4HWr8aoWOfLIqI9um6Y7W4jUSQhrEsumHKjpANrgw7%2FwVQsJ6k2nIFeDjTg0oWNN1fuCJicFPCud0jQc2RUyw190rJr6WigYRe2PhwkZbwXzEnzeYNHhRRnB2zKHXf6ohZjvsgfovWiOwTei9JQ78rwJOHd9ZeWYBRsHeY3G76C6uO7GRoXz8FgpjO6EQiXr%2FQ%2F2oNQtgluJfwagds6IDcBPzi9KuVWpmNR%2F%2BZneeJ1IJVBntZ86%2Bd%2BhIxnSezDYMmbhImAYDU27pMXM5A%3D%3D", like: 0, dislike: 0 },
    { imageUrl: "https://storage.googleapis.com/rvko-11.appspot.com/foto/gambar3.jpeg?GoogleAccessId=firebase-adminsdk-e35xz%40rvko-11.iam.gserviceaccount.com&Expires=16730298000&Signature=Qdd8KiKEaFoG14VQ%2B2jFyEJeuan9%2FlMvko9QQhSiqOh9lEt8ngNEjWoAcwzGSLXXRsOsBHdbU5%2B5iNEFbIr7QPz0PXDH6ub1nj5GJASFKi3Mu79z86iHC5HS%2BmxXEn8%2Ftsfw1Mf5rrnLXC5BsCJA4fxXvRg8%2F9K%2Fg5t7nNV2sY5v0omrtysl8A8PAU0vTn%2FVBi283BpzA7kwTer%2Fdgvs%2BN2G9DKcHqdhdTPdgsODdoRQydg2VevMqDZIwJO9AkRe0fixhL%2BLisLO8ibFUUn%2FZ%2FFvGiFYK83OvRtMvGJKRBeAGQ5%2B%2BLJIO6TKcwhr%2Bqtx3eRLZTCZ0zLbDvFs8827NA%3D%3D", like: 0, dislike: 0 }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  const handleSwipeUp = () => {
    if (!showPopup) {
      setCurrentIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }
  };

  const handleOutsidePopupClick = (event) => {
    if (event.target.classList.contains('popup-background')) {
      setShowPopup(false);
    }
  };

  return (
    <div className="container">
      {showPopup && (
        <div className="popup-background" onClick={handleOutsidePopupClick}>
          <div className="popup">
            <p>Swipe left to like</p>
          </div>
        </div>
      )}
      <div className="cube-tinder">
        <img src={Logo} alt="logo" className="logo-account" />
        <img src={Tutorial} alt="tutorial" className="tutorial-tinder" /> 
        <img src={Back} alt="back" className="back-tinder" />

        <div className="line"></div>
        <div className="image1" style={{ backgroundImage: `url(${images[currentIndex].imageUrl})` }} onClick={handleSwipeUp}></div>
      </div>
    </div>
  );
};

export default Tinderguest;
