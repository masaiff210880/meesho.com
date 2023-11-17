
import React, { useEffect } from 'react'
import styles from "../../styles/productlist.module.css"
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { Box, Flex, Text } from '@chakra-ui/react';

const Mens = () => {
  const ladiesProducts = useSelector((state) => state.users.ladiesProducts);

const status = useSelector((state) => state.users.status);


if (status === "loading") {
  return <div>Loading...</div>;
}

if (status === "failed") {
  return <div>Error loading data</div>;
}

  return (
    <div>
      <Navbar />     
      <div>
      <div>
        <Text fontSize='4xl'  paddingLeft="8" textAlign="center">Ladies Wear's</Text>
        <Flex >
        <Box flex="40%" backgroundColor="" p="4">
          {/* Left Side */}
        </Box>

        <Box flex="60%" backgroundColor="" p="4">
        <ul className={styles["product-list"]}>
        {ladiesProducts.map((product) => (
          <li key={product.id} className={styles["product-item"]}>
            <img src={product.src} alt={product.name} className={styles["product-img"]} />
            <div className={styles["product-details"]}>
              <p>Name: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Rating: {product.rating}</p>
            </div>
          </li>
        ))}
      </ul>
      </Box>
      </Flex>
      </div>
      </div>

    </div>
  )
}

export default Mens