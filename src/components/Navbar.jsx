import { Box, Divider, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location);
  return (
    <Flex
      w={"60px"}
      p={"0px 5px"}
      h={"100vh"}
      pos={"fixed"}
      left={"0px"}
      direction={"column"}
      align={"flex-end"}
      justify={"space-evenly"}
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
