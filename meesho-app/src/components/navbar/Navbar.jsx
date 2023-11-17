import { Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <Heading padding="8" color="#F43397">Meesho Collection's</Heading>
      <Stack direction="row" spacing={4} align="center" padding="8">
        <Link to="/">
          <Button colorScheme="teal" variant="solid">
            Mens
          </Button>{" "}
        </Link>
        <Link to="/ladies">
          <Button colorScheme="teal" variant="solid">
            Ladies
          </Button>
        </Link>
        <Link to="/childrens">
          {" "}
          <Button colorScheme="teal" variant="solid">
            Childrens
          </Button>
        </Link>
        <Link to="/beauty">
          <Button colorScheme="teal" variant="solid">
            Beauty
          </Button>
        </Link>
        <Link to="/jewellery">
          <Button colorScheme="teal" variant="solid">
            Jewellery
          </Button>
        </Link>
        <Link to="/profile">
          <Button colorScheme="teal" variant="solid">
            Profile
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default Navbar;

