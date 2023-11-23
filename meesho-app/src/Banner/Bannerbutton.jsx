// Your component file
import React from 'react';
import style from '../styles/Banner.module.css';
import homedecor from '../images/homedecoricon.jpeg';
import { Button } from '@chakra-ui/react';

const Bannerbutton = ({ btnText }) => {
  return (
    <div className={style.bannercard}>
      <div>
        <img src={homedecor} alt="Icon 1" className={style.imgstyle} />
        <img src={homedecor} alt="Icon 2" className={style.imgstyle} />
      </div>
      <div style={{ marginTop: '40px' }}>
        <Button colorScheme="pink">
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default Bannerbutton;
