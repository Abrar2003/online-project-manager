import { Box, Divider, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const shadow = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  const handleClick = () => {
    localStorage.removeItem("login");
    navigate("/");
  };
  return (
    <>
      <Flex
        w={"60px"}
        style={shadow}
        h={"100vh"}
        pos={"fixed"}
        left={"0px"}
        direction={"column"}
        align={"center"}
        justify={"space-evenly"}
        bg={"white"}
        display={["none", "none", "none", "flex", "flex"]}
        zIndex={"100"}
      >
        <Stack gap={"30px"} w={"100%"}>
          <Link to={"/dashboard"}>
            {location.pathname === "/dashboard" ? (
              <Flex
                justify={"center"}
                align={"center"}
                w={"100%"}
                borderLeft={"3px solid blue"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/Dashboard-active.svg").default}
                />
              </Flex>
            ) : (
              <Flex
                justify={"center"}
                align={"center"}
                w={"100%"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/Dashboard.svg").default}
                />
              </Flex>
            )}
          </Link>
          <Link to={"/project-list"}>
            {location.pathname === "/project-list" ? (
              <Flex
                justify={"center"}
                align={"center"}
                w={"100%"}
                borderLeft={"3px solid blue"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/Project-list-active.svg").default}
                />
              </Flex>
            ) : (
              <Flex
                justify={"center"}
                align={"center"}
                w={"100%"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/Project-list.svg").default}
                />
              </Flex>
            )}
          </Link>
          <Divider color={"#96a1a9"} />
          <Link to={"/project"}>
            {location.pathname === "/project" ? (
              <Flex
                justify={"center"}
                align={"center"}
                w={"100%"}
                borderLeft={"3px solid blue"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/create-project-active.svg").default}
                />
              </Flex>
            ) : (
              <Flex
                justify={"center"}
                align={"center"}
                w={"100%"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/create-project.svg").default}
                />
              </Flex>
            )}
          </Link>
        </Stack>
        <Image
          onClick={handleClick}
          w={["26px", "26px", "34px", "30px"]}
          src={require("../Assets/Logout.svg").default}
        />
      </Flex>
      <Flex
        w={"100%"}
        style={shadow}
        p={"0px 50px"}
        h={"70px"}
        pos={"fixed"}
        bottom={"0px"}
        direction={"flex"}
        align={"center"}
        justify={"space-between"}
        bg={"white"}
        roundedTop={"30px"}
        zIndex={"100"}
        display={["flex", "flex", "none", "none"]}
      >
        <Link to={"/dashboard"}>
            {location.pathname === "/dashboard" ? (
              <Flex
                justify={"center"}
                align={"center"}
                borderBottom={"3px solid blue"}
                h={"60px"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/Dashboard-active.svg").default}
                />
              </Flex>
            ) : (
              <Flex
                justify={"center"}
                align={"center"}
                h={"60px"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/Dashboard.svg").default}
                />
              </Flex>
            )}
          </Link>
          <Link to={"/project-list"}>
            {location.pathname === "/project-list" ? (
              <Flex
                justify={"center"}
                align={"center"}
                borderBottom={"3px solid blue"}
                h={"60px"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/Project-list-active.svg").default}
                />
              </Flex>
            ) : (
              <Flex
                justify={"center"}
                align={"center"}
                h={"60px"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/Project-list.svg").default}
                />
              </Flex>
            )}
          </Link>
          <Link to={"/project"}>
            {location.pathname === "/project" ? (
              <Flex
                justify={"center"}
                align={"center"}
                borderBottom={"3px solid blue"}
                h={"60px"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/create-project-active.svg").default}
                />
              </Flex>
            ) : (
              <Flex
                justify={"center"}
                align={"center"}
                h={"60px"}
              >
                <Image
                  w={["26px", "26px", "34px", "30px"]}
                  src={require("../Assets/create-project.svg").default}
                />
              </Flex>
            )}
          </Link>
      </Flex>
    </>
  );
}

export default Navbar;
