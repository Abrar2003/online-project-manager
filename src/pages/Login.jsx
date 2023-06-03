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
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const isErrorEmail = form.email === "";
  const isErrorPassword = form.password === "";
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const onChange = (e) => {
    const { name:key, value } = e.target;
    setform({
      ...form,
      [key]: value
    })
  }
  const shadow = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  const submit = () => {
    setTimeout(()=>{
      axios.post("http://localhost:8080/user/login", form).then((res) => {
      console.log(res.data, form);
      if (res.data.success) {
        localStorage.setItem("login", true);
        navigate("/dashboard");
      } else {
        setValid(false);
      }
    })
    .catch(err => {
      console.log(err);
    })
    }, 100);
    
  };
  return (
    <Box h={"100vh"}>
      <Image
        h={["40vh", "50vh", "50vh", "50vh"]}
        width={["auto", "auto", "100%", "100%", "100%"]}
        objectFit={"cover"}
        roundedBottomLeft={"100px"}
        src={require("../login-bg-1.svg").default}
        alt="login bg"
      />
      <Flex
        w={"100%"}
        gap={"20px"}
        pos={"absolute"}
        top={["100px", "100px", "100px", "100px"]}
        justify={"center"}
        align={"center"}
        direction="column"
      >
        <Image src={require("../Assets/Logo.svg").default} alt="logo" />
        <Text color={"white"}>Online Project Management</Text>
        <Flex
          display={["none", "none", "flex", "flex"]}
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
            <Input type="email" name="email" onChange={onChange} />
            <FormErrorMessage>Email is required</FormErrorMessage>
          </FormControl>
          <FormControl w={"80%"} isInvalid={isErrorPassword}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={onChange}
              />
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
          <Stack w="80%" direction={"row"} align={"start"} justify={"flex-end"}>
            <Link color={"blue.400"}>Forgot password?</Link>
          </Stack>
          <Button
            onClick={submit}
            rounded={"25px"}
            bgColor={"#035fb2 "}
            w={"40%"}
            color={"white"}
          >
            Login
          </Button>
        </Flex>
        {valid ? null : (
          <Text display={["none", "none", "block", "block"]} color={"red"}>
            Invalid Credentials
          </Text>
        )}
      </Flex>
      <Flex
        display={["flex", "flex", "none", "none"]}
        direction={"column"}
        bg={"white"}
        w={"100%"}
        gap={"20px"}
        justify={"left"}
        align={"center"}
        boxSizing="borderbox"
        mt={"20px"}
      >
        <Text w={"90%"} fontSize={"xl"} textAlign={"left"}>
          Login to get started
        </Text>
        <FormControl w={"90%"} isInvalid={isErrorEmail}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" onChange={onChange} />
          <FormErrorMessage>Email is required</FormErrorMessage>
        </FormControl>
        <FormControl w={"90%"} isInvalid={isErrorPassword}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={onChange}
            />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>Password is required</FormErrorMessage>
        </FormControl>
        <Stack w="90%" direction={"row"} align={"start"} justify={"flex-end"}>
          <Link color={"blue.400"}>Forgot password?</Link>
        </Stack>
        {valid ? null : <Text color={"red"}>Invalid Credentials</Text>}
        <Button
          onClick={submit}
          rounded={"25px"}
          bgColor={"#035fb2 "}
          w={"80%"}
          color={"white"}
        >
          Login
        </Button>
      </Flex>
    </Box>
  );
}

export default Login;
