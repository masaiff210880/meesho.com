import React from 'react';
import banner3 from '../images/banner3.webp';
import style from '../styles/Banner.module.css';
import cardsimg from '../images/cardsimg.webp';
import Bannerbutton from './Bannerbutton';

const Banner3 = () => {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const imageStyle = {
    position: 'absolute',
    width: '83%', // Adjust the width as needed
    maxWidth: '100%', // Ensure the image is responsive
    height: 'auto',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 0, // Adjust the zIndex value as needed
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1, // Adjust the zIndex value as needed
  };

  return (
    <div className="container" style={containerStyle}>
      <img src={banner3} alt="Banner 3" style={imageStyle} />
      <Bannerbutton btnText={"Home Decor"}/>
      <Bannerbutton  btnText={"Kitchen"}/>
      <Bannerbutton btnText={"Health Care"}/>
    </div>
  );
};

export default Banner3;
