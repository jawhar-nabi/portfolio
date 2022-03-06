import React, { useEffect, useState } from "react";
import {FaArrowCircleUp} from 'react-icons/fa';

export default function ScrollToTop() {
  const [visible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  // return (
  //   <div className="scroll-to-top">
  //     {isVisible && 
  //       <div onClick={scrollToTop}>
  //         {/* <i className="fas fa-chevron-up"/> */}
  //         <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top'/>
  //       </div>}
  //   </div>
  // );
  return (
    <button className="back-to-top-btn">
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </button>
  );

}