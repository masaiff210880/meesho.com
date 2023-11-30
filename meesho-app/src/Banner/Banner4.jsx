import React from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Box } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

const Banner5 = () => {
  return (
    <Flex
      // w={'100%'}
      // h={'100vh'}
      // mx={'auto'}
      // align={'center'}
      // justifyContent={'flex-start'}
      // backgroundImage={
      //   'url(https://images.meesho.com/images/pow/supplyBannerDesktop_1106.webp)'
      // }
      // backgroundSize={'cover'}
      // backgroundPosition={'center center'}
      w={'82vw'}
      h={'100vh'}
      mx={'auto'} 
      align={'center'} 
      justifyContent={'flex-start'} 
      backgroundImage={
        'url(https://images.meesho.com/images/pow/supplyBannerDesktop_1106.webp)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Stack maxW={'2xl'} spacing={6} align="start">
        <Text
          color={'white'}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          mb={2}
          ml={5}
        >
          Register as a Meesho Supplier
        </Text>
        <Text
          color={'white'}
          fontWeight={200}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}
          mb={2}
          ml={5}
        >
          Sell your products to crores of customers at 0% commission
        </Text>

        <Flex direction={{ base: 'column', md: 'row' }}>
          <Text
            color={'white'}
            flex="1"
            borderRight={{ base: 'none', md: '1px solid #ccc' }}
            padding={2}
            mb={2}
            ml={{ base: 5, md: 0 }}
            display="flex"
            alignItems="center"
            whiteSpace="nowrap"
          >
            <Box as="span" marginRight={2}>
              <ViewIcon boxSize={5} />
            </Box>
            Grow your business 10x
          </Text>

          <Text
            color={'white'}
            flex="1"
            borderRight={{ base: 'none', md: '1px solid #ccc' }}
            padding={2}
            mb={2}
            ml={{ base: 5, md: 0 }}
            display="flex"
            alignItems="center"
            whiteSpace="nowrap"
          >
            <Box as="span" marginRight={2}>
              <ViewIcon boxSize={5} />
            </Box>
            Enjoy 100% Profit
          </Text>
          <Text
            color={'white'}
            flex="1"
            padding={2}
            mb={2}
            ml={{ base: 5, md: 0 }}
            display="flex"
            alignItems="center"
            whiteSpace="nowrap"
          >
            <Box as="span" marginRight={2}>
              <ViewIcon boxSize={5} />
            </Box>
            Sell all over India
          </Text>
        </Flex>
        <Button colorScheme='pink' bg='white' color='purple' mb={2} ml={{ base: 5, md: 0 }}>
          Sign up now
        </Button>
      </Stack>
    </Flex>
  );
};

export default Banner5;
