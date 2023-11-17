import React from 'react';
import { Box, Container, Stack, SimpleGrid, Text, VisuallyHidden, chakra, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

// // Replace these imports with the actual paths to your components
// import AppStoreBadge from '#/components/AppStoreBadge';
// import PlayStoreBadge from '#/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
     <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={14}>
        <Stack align={'flex-start'} spacing={0} style={{ width: '400%',position:"relative",right:'80px',textAlign:"left" }}>
    <ListHeader>Shop Non-Stop on Meesho</ListHeader>
    <Box as="a" href={'#'}>
        Trusted by more than 1 Crore Indians <br />
        Cash on Delivery | Free Delivery
    </Box>
</Stack>



          <Stack align={'flex-start'}>
            <ListHeader>Careers</ListHeader>
            <ListHeader as="a" href={'#'}>
            Become a supplier
            </ListHeader>
            <ListHeader as="a" href={'#'}>
            Hall of Fame
            </ListHeader>
            <ListHeader as="a" href={'#'}>
            Sitemap
            </ListHeader>
          </Stack>

          <Stack align={'flex-start'}>
           
            <ListHeader as="a" href={'#'}>
            Legal and Policies
            </ListHeader>
            <ListHeader as="a" href={'#'}>
            Meesho Tech Blog
            </ListHeader>
            <ListHeader as="a" href={'#'}>
            Notices and Returns
            </ListHeader>
          
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Reach out to us</ListHeader>
            <Stack direction="row" spacing={6}>
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
            <SocialButton label="Facebook" href="#">
              <FaFacebook/>
            </SocialButton>
          </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact Us</ListHeader>
            <Box as="a" href={'#'} align={'flex-start'} style={{ fontSize: "13px", textAlign: "left", margin: 0, padding: 0 }}>
    Fashnear Technologies Private <br/>
    Limited, <br/>
    CIN: U74900KA2015PTC082263 <br/>
    06-105-B, 06-102, (138 Wu)  <br/>
    Vaishnavi  Signature, No. 78/9, <br/>
    Outer Ring Road, Bellandur,<br/>
    Varthur Hobli, Bengaluru-560103, <br/>
    Karnataka, India <br/>
    E-mail address: <br/>
    query@meesho.com <br/>
    © 2015-2023 Meesho.com
</Box>

          </Stack>
          
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle="solid" borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2023 Flipkart. All rights reserved</Text>
       
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
