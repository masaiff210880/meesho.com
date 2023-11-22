// SimpleComponent.jsx

// CombinedComponent.jsx

import React from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

const Banner3 = () => {
  return (
    <Flex
    w={'82vw'}
    h={'100vh'}
    mx={'auto'} 
    align={'center'} 
    justifyContent={'flex-end'} // Align content to the end
    backgroundImage={
      'url(https://images.meesho.com/images/pow/downloadBannerDesktop_1050.webp)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}
  >
    <Stack maxW={'2xl'} spacing={6}>
      <Text
        color={'skyblue'}
        fontWeight={700}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
        textAlign={'right'} 
        marginRight={"50px"}
      >
        Become a Reseller and
      </Text>
      <Text
      color={'purple'}
        fontWeight={700}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
        textAlign={'right'} 
        marginRight={"50px"}
      >
        Start your Online Business <br />with Zero Investment
      </Text>
    </Stack>
  </Flex>
  
  );
};

export default Banner3;

