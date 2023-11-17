import { Button, Center, Container, Text } from '@chakra-ui/react';
import React from 'react';
import banner2 from '../images/banner2.jpg'
import style from '../styles/Banner.module.css'
import cardsimg from '../images/cardsimg.webp'

import {
  Heading,
  Avatar,

Box,
  Image,
  Flex,

  Stack,

  useColorModeValue,
} from '@chakra-ui/react'
import Bannerbutton from './Bannerbutton';




const TopBanner = () => {
  return (
  
    //    <div className={style.bannerground}>
    // <div className="" style ={{alignItems:"center"}}>
    //    <Text style={{fontSize:"30px"}}> <b>Top Categories to choose from</b></Text>

    //    <br />

     
    //    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
    //   {/* <img src={banner2} alt="Banner" /> */}
     
    // </div>
    // </div>
   <div className={style.bannerbg}>
    <div style={{textAlign:'left'}}>

    <Button colorScheme='pink' style={{textAlign:"left"}}> View all</Button>
    </div>
    {/* <div className={style.card}>
<div className={style.card1}>

<Center py={6} display="flex" style={{ position: 'relative', left: '140px' }}>
   
  <div
    maxW={'270px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow={'2xl'}
    rounded={'md'}
    overflow={'hidden'}

   
    style={{ marginRight: '10px' }} // Adjust the margin as needed
  >
    <img src={cardsimg} alt="Card Image" style={{ width: '100%' }} />
    <Button colorScheme="pink" size="md" mt={4}>
      Home Decor
    </Button> 
    &nbsp;
  </div>

  <div
    maxW={'270px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow={'2xl'}
    rounded={'md'}
    overflow={'hidden'}
   
    style={{ marginRight: '10px' }} // Adjust the margin as needed
  >
    <img src={cardsimg} alt="Card Image" style={{ width: '100%' }} />
    <Button colorScheme="pink" size="md" mt={4}>
     Kitchen
    </Button> &nbsp;
  </div>

  <div
    maxW={'270px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow={'2xl'}
    rounded={'md'}
    overflow={'hidden'}
  
  >
    <img src={cardsimg} alt="Card Image" style={{ width: '100%' }} />
    <Button colorScheme="pink" size="md" mt={4}>
      Health Care
    </Button> 
    

  </div>
</Center>



    

</div>
    </div> */}
  


      <Bannerbutton  btnText ={"Home Decor"}/>
      <Bannerbutton btnText ={"Kitchen"} />
      <Bannerbutton btnText ={"Health Care"}/>

 
   </div>
  );
};

export default TopBanner;
