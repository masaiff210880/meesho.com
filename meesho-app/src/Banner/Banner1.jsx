

// ExampleComponent.jsx

import React from 'react';

import BannerCard from './Bannerbutton';
import BannerCard2 from './BannerCard2';

const Banner1 = () => {
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
  return (
    <div  style={containerStyle}>
      <img src="https://images.meesho.com/images/marketing/1698036891727_1200.webp" alt="Centered Image" style={imageStyle}/>
      <BannerCard2 ptext ={"clothing"}/>
      <BannerCard2 ptext={"Home Decor"}/>
    </div>
  );
};

export default Banner1;
