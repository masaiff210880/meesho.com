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
import { ReactElement } from 'react';
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
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} style={{textAlign:"left"}}>
       
          <Heading style={{textAlign:"left"}}>Lowest Prices <br />
Best Quality Shopping</Heading>
        
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
        
          </Stack>
          <div style={{ display: 'flex' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
   
  </div>
  <div style={{ borderRight: '1px solid black', color: 'black', display: 'flex', alignItems: 'center' }}>
    <img src={vanicon} alt="Van Icon" style={{ marginRight: '8px' }} />
    Free Delivery
  </div> &nbsp;
  <div style={{ borderRight: '1px solid black', color: 'black', display: 'flex', alignItems: 'center', marginRight:'30px'}}>
    <img src={moneyicon} alt="Money Icon" style={{ marginRight: '8px' }} />
    Cash on Delivery
  </div> &nbsp;
  <div style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
    <img src={shoppingicon} alt="Shopping Icon" style={{ marginRight: '8px' }} />
    Easy Returns
  </div>
</div>
<br />

<div>
            <Button colorScheme='pink'>
                <img alt ="storeicon" src={playstoreicon}/> &nbsp;
                Download the Meesho App
            </Button>
        </div>
        </Stack>
      
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={banner1
              
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Banner;
