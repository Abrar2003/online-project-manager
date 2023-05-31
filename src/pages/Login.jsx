import {
  Box,
  Flex,
  Image,
  Text,
  FormLabel,
  Input,
  FormErrorMessage,
  FormControl,
  Button,
  InputGroup,
  InputRightElement,
  Stack,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import React, { useState } from "react";
// import { ReactComponent as logbg } from "../login-bg-1.svg"

function Login() {
  const [form, setform] = useState({
    email: "",
    password: ""
  })
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isErrorEmail = email === "";
  const isErrorPassword = password === "";
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPassChange = (e) => setPass(e.target.value);
  const shadow = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  const submit = async() => {
    setform({
      email,
      password
    });
    //TODO: post req for login
  }
  return (
    <Box h={"100vh"}>
      <Image
       h={["50vh", "50vh"]}
        width={["auto", "auto", "100%", "100%", "100%"]}
        objectFit={"cover"}
        roundedBottomLeft={"100px"}
        src={require("../login-bg-1.svg").default}
        alt="login bg"
      />
      <Flex
        w={"100%"}
        gap={"20px"}
        pos={"fixed"}
        top={"100px"}
        justify={"center"}
        align={"center"}
        direction="column"
      >
        <Image src={require("../Assets/Logo.svg").default} alt="logo" />
        <Text color={"white"}>Online Project Management</Text>
        <Flex
          direction={"column"}
          style={shadow}
          bg={"white"}
          w={"22%"}
          h={"450px"}
          rounded={"15px"}
          gap={"20px"}
          justify={"center"}
          align={"center"}
        >
          <Text fontSize={"xl"}>Login to get started</Text>
          <FormControl w={"80%"} isInvalid={isErrorEmail}>
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={onEmailChange} />
            <FormErrorMessage>Email is required</FormErrorMessage>
          </FormControl>
          <FormControl w={"80%"} isInvalid={isErrorPassword}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? "text" : "password"} onChange={onPassChange} />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>Password is required</FormErrorMessage>
          </FormControl>
          <Stack
                w="80%"
                direction={"row"}
                align={'start'}
                justify={'flex-end'}>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
          <Button onClick={submit} rounded={"25px"} bgColor={"#035fb2 "} w={"40%"} color={"white"}>Login</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Login;
