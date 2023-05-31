import { Box, Divider, Flex, Image } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  return (
    <Flex w={"50px"} p={"0px 5px"} h={"100vh"} pos={"fixed"} left={"0px"} border={"1px solid"} gap={"30px"} direction={"column"} align={"center"} justify={"center"}>
        <Image w={"34px"} src={require("../Assets/Dashboard.svg").default} />
        <Image w={"34px"} src={require("../Assets/Project-list.svg").default} />
        <Divider color={"#96a1a9"} />
        <Image w={"34px"} src={require("../Assets/create-project.svg").default} />
    </Flex>
  )
}

export default Navbar