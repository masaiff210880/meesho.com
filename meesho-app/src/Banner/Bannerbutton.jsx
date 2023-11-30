// Your component file
// import React from 'react';
// import style from '../styles/Banner.module.css';
// import homedecor from '../images/homedecoricon.jpeg';
// import { Button } from '@chakra-ui/react';

// const Bannerbutton = ({ btnText }) => {
//   return (
//     <div className={style.bannercard}>
//       <div>
//         <img src={homedecor} alt="Icon 1" className={style.imgstyle} />
//         <img src={homedecor} alt="Icon 2" className={style.imgstyle} />
//       </div>
//       <div style={{ marginTop: '40px' }}>
//         <Button colorScheme="pink">
//           {btnText}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Bannerbutton;

import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function BannerCard({btnText}) {
  return (
    <>
    <Center py={12}>
    <Box
      role={'group'}
      p={5}
      m={4}
      maxW={'330px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
      mb={4}
      ml={{ base: '0px', md: '5px', lg: '10px' }}
      left={32}
    >
      <Box>
        <Image
          rounded={'lg'}
          height={130}
          width={'100%'} 
          objectFit={'cover'}
          src={IMAGE}
          alt="#"
          p={1}
        />
      </Box>
      <Box mt={2}>
        <Image
          rounded={'lg'}
          height={130}
          width={'100%'} 
          objectFit={'cover'}
          src={IMAGE}
          alt="#"
          p={1}
        />
      </Box>
        <Box>

    <Button colorScheme='pink'>
    {btnText}
    </Button>
        </Box>
    </Box>
  </Center>
  </>
  );
}

export default BannerCard;

