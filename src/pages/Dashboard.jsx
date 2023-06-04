import {
  Box,
  Flex,
  Image,
  Input,
  Select,
  Text,
  InputLeftElement,
  InputGroup,
  useDisclosure,
} from "@chakra-ui/react";import React from "react";
import { MdArrowBackIosNew, MdLogout } from "react-icons/md";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <Box mb={"70px"} ml={["0", "0", "60px", "60px"]}>
      <Box w="100%">
            <Image
              w={"100%"}
              h={["60px", "60ox", "auto", "auto"]}
              pos={"fixed"}
              top={"0px"}
              zIndex="100"
              objectFit={"cover"}
              roundedBottom={["30px", "30px", "0", "0"]}
              src={require("../Assets/Header-bg.svg").default}
            />
            <Flex
              w={"90%"}
              pl={["0px", "0px", "60px", "60px"]}
              align={"center"}
              pos={"fixed"}
              zIndex="100"
              m={"auto"}
              p={"0 10px"}
              top={["20px", "20px", "60px", "60px"]}
              justify={["space-between", "space-between", "left", "left"]}
              gap={["0%", "0%", "35%", "35%"]}
            >
              <Flex
                justify={"center"}
                align={"center"}
                gap={"10px"}
                fontSize={["m", "m", "2xl"]}
                fontWeight={"bold"}
                color={"white"}
              >
                <MdArrowBackIosNew />
                Dashboard
              </Flex>
              <Box>
                <Image
                  display={["none", "none", "inline", "inline"]}
                  src={require("../Assets/Logo.svg").default}
                />
                <Box
                  fontSize={"2xl"}
                  color={"white"}
                  display={["inline", "inline", "none", "none"]}
                  onClick={logout}
                >
                  <MdLogout />
                </Box>
              </Box>
            </Flex>
          </Box>
      </Box>
    </>
  );
}

export default Dashboard;
