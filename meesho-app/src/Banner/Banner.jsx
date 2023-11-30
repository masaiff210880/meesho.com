import React from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Table,
  Td,
  Button,
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import banner1 from '../images/banner1.webp'
import vanicon from '../images/vanicon.svg'
import moneyicon from '../images/moneyicon.svg'
import shoppingicon from '../images/shopicon.svg'
import playstoreicon from '../images/playstoreicon.png'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Banner = () => {
  return (
    <Container maxW={'5xl'} py={{ base: 6, md: 12 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} textAlign={{ base: 'left', md: 'left' }}>
          <Heading>Lowest Prices <br /> Best Quality Shopping</Heading>
        
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
        
          </Stack>
          <Flex direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'flex-start', md: 'center' }}>
            <Feature text="Free Delivery" iconBg="pink.200" icon={<Image src={vanicon} alt="Van Icon" />} />
            <Feature text="Cash on Delivery" iconBg="blue.200" icon={<Image src={moneyicon} alt="Money Icon" />} />
            <Feature text="Easy Returns" iconBg="green.200" icon={<Image src={shoppingicon} alt="Shopping Icon" />} />
          </Flex>
          <Button colorScheme='pink'>
            <Image alt="storeicon" src={playstoreicon} /> &nbsp;
            Download the Meesho App
          </Button>
        </Stack>
      
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={banner1}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Banner;
