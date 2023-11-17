import React from 'react';
import style from '../styles/Banner.module.css'
import homedecor from '../images/homedecoricon.jpeg'
import { Button } from '@chakra-ui/react';
const Bannerbutton = ({btnText}) => {
 
  return (
    <>
    <div className={style.bannercard}>
        <div>

      <img src={homedecor} className={style.imgstyle}/>
      <br />
      <img src={homedecor} className={style.imgstyle}/>
        </div>
<div>
    <Button colorScheme='pink' style={{position:"relative",top:"70px"}}> {btnText} </Button>
</div>
    </div>
    </>

  );
};


export default Bannerbutton;