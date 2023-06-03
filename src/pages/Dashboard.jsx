import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'

function Dashboard() {
  return (
    <Box pl={["0", "0", "60px", "60px"]}>
        <Navbar />
        Dashboard
    </Box>
  )
}

export default Dashboard