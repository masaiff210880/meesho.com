// import React from 'react'

// const Childrens = () => {
//   return (
//     <div>childrens</div>
//   )
// }

// export default Childrens
// import React from 'react'

// const Ladies = () => {
//   return (
//     <div>ladies pageee</div>
//   )
// }

// export default Ladies
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from "../../styles/productlist.module.css"
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { Box, Flex, Text } from '@chakra-ui/react';
// import { fetchMensData } from '../../store/slices/UserSlice';

const Mens = () => {
  // const dispatch = useDispatch();
  const childrensProducts = useSelector((state) => state.users.childrensProducts);

// console.log("data", mensProducts );
const status = useSelector((state) => state.users.status);

// useEffect(() => {
//   if (status !== "success") {
//     dispatch(fetchMensData());
//   }
// }, [dispatch, status]);


if (status === "loading") {
  return <div>Loading...</div>;
}

if (status === "failed") {
  return <div>Error loading data</div>;
}

  return (
    <div>
      <Navbar/>      
      <div>
      <div>
        <Text fontSize='4xl'  paddingLeft="8" textAlign="center">Children's Wear's</Text>
        <Flex >
        <Box flex="40%" backgroundColor="" p="4">
        {/* <Text fontSize='2xl'  paddingLeft="8"> Left Side</Text> */}
        </Box>

        <Box flex="60%" backgroundColor="" p="4">
        <ul className={styles["product-list"]}>
        {childrensProducts.map((product) => (
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