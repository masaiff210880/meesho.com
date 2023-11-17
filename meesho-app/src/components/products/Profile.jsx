import React from 'react'
import Navbar from '../navbar/Navbar'
import { Text } from '@chakra-ui/react'

const Profile = () => {
  return (
    <div>
      <Navbar />
        <Text fontSize='4xl'  paddingLeft="8" textAlign="center">Profile Landing Page</Text>

    </div>
  )
}

export default Profile