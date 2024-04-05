import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "image1.png", // Assuming image1.jpg, image2.jpg, image3.jpg are in the public/img directory
    "image2.png",
    "image3.png",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((image, index) => (
          <img key={index} src={`${process.env.PUBLIC_URL}/img/${image}`} alt="" />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
