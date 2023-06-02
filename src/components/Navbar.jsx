import { Box, Divider, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const shadow = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  return (
    <Flex
      w={"60px"}
      style={shadow}
      p={"0px 5px"}
      h={"100vh"}
      pos={"fixed"}
      left={"0px"}
      direction={"column"}
      align={"center"}
      justify={"space-evenly"}
      bg={"white"}
    >
      <Stack gap={"30px"}>
        {location.pathname == "/dashboard" ? (
          <Image
            w={"34px"}
            src={require("../Assets/Dashboard-active.svg").default}
          />
        ) : (
          <Image w={"34px"} src={require("../Assets/Dashboard.svg").default} />
        )}
        {location.pathname == "/project-list" ? (
          <Image
            w={"34px"}
            src={require("../Assets/Project-list-active.svg").default}
          />
        ) : (
          <Image
            w={"34px"}
            src={require("../Assets/Project-list.svg").default}
          />
        )}
        <Divider color={"#96a1a9"} />
        {location.pathname == "/project" ? (
          <Image
            w={"34px"}
            src={require("../Assets/create-project-active.svg").default}
          />
        ) : (
          <Image
            w={"34px"}
            src={require("../Assets/create-project.svg").default}
          />
        )}
      </Stack>
      <Image
            w={"34px"}
            src={require("../Assets/Logout.svg").default}
          />
    </Flex>
  );
}

export default Navbar;
