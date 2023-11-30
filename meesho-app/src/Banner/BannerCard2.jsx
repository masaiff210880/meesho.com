import React from 'react';
import { Center, useColorModeValue, Image, Flex } from '@chakra-ui/react';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function BannerCard2({ ptext }) {
  return (
    <Center py={12}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        p={3} // Adjusted padding for better spacing on small screens
        m={2} // Adjusted margin for better spacing on small screens
        maxW={{ base: '100%', md: '90%', lg: '80%' }} // Adjusted maximum width
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        mb={4}
        ml={{ base: '0', md: '5px', lg: '20px' }}
        mt={{ base: '4', md: '145px' }}
      >
        <Flex direction="column" flex="1" mb={{ base: 4, md: 0 }}>
          <Image
            rounded={'lg'}
            height={130}
            width={'100%'}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
            p={1}
            m={1}
          />
          <p>{ptext} </p>
          <Image
            rounded={'lg'}
            height={130}
            width={'100%'}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
            p={1}
            m={1}
          />
          <p>{ptext}</p>
        </Flex>

        <Flex direction="column" flex="1" mt={{ base: 4, md: 0 }}>
          <Image
            rounded={'lg'}
            height={130}
            width={'100%'}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
            p={1}
            m={1}
          />
          <p>{ptext} </p>
          <Image
            rounded={'lg'}
            height={130}
            width={'100%'}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
            p={1}
            m={1}
          />
          <p>{ptext} </p>
        </Flex>
      </Flex>
    </Center>
  );
}

export default BannerCard2;
