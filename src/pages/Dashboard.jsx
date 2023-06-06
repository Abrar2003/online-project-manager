import { Box, Flex, Image, Text, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdLogout } from "react-icons/md";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BarChart from "../components/BarChart";
async function getStats() {
  let res = await axios.get(
    "https://pink-colorful-whale.cyclic.app/project/project-stats"
  );
  return res.data;
}
async function getDepartmentStats() {
  let res = await axios.get(
    "https://pink-colorful-whale.cyclic.app/project/department-stats"
  );
  return res.data;
}
function Dashboard() {
  const shadow = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  const [stats, setStats] = useState({});
  const navigate = useNavigate();
  const [departmentData, setDepartmentData] = useState(null);
  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };
  useEffect(() => {
    getStats().then((res) => setStats(res));
    getDepartmentStats().then((res) =>
      setDepartmentData({
        labels: res.map((data) => [
          `${data.completionPercentage}%`,
          data.department.slice(0, 3),
        ]),
        datasets: [
          {
            label: "Running",
            data: res.map((data) => data.totalProjects),
            backgroundColor: ["#025aab"],
          },
          {
            label: "Closed",
            data: res.map((data) => data.closedProjects),
            backgroundColor: ["#5aa647"],
          },
        ],
      })
    );
  }, []);
  return (
    <>
      <Navbar />
      <Box
        pt={["50px", "50px", "200px", "200px"]}
        mb={"70px"}
        ml={["0", "0", "60px", "60px"]}
        bgColor="#eef2f5"
        h={"100vh"}
      >
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
        <Flex
          p={"1.5rem"}
          overflowX={"auto"}
          w={"100%"}
          m={"auto"}
          gap={"20px"}
          color={"gray.600"}
          fontWeight={"600"}
          css={{
            "&::-webkit-scrollbar": {
              width: "0px",
            },
          }}
        >
          <Stack
            style={shadow}
            justify={"center"}
            p={"1rem"}
            bg={"white"}
            h={"100px"}
            borderLeft={"5px solid #0cc9e8"}
            rounded={"8px"}
            minW={["40%", "40%", "19%", "19%"]}
          >
            <Text fontSize={["l", "l", "xl", "xl"]}>Total Projects</Text>
            <Heading>{stats.totalProjects}</Heading>
          </Stack>
          <Stack
            style={shadow}
            justify={"center"}
            p={"1rem"}
            bg={"white"}
            h={"100px"}
            borderLeft={"5px solid #0cc9e8"}
            rounded={"8px"}
            minW={["40%", "40%", "15%", "19%"]}
          >
            <Text fontSize={["l", "l", "xl", "xl"]}>Closed</Text>
            <Heading>{stats.closedProjects}</Heading>
          </Stack>
          <Stack
            style={shadow}
            justify={"center"}
            p={"1rem"}
            bg={"white"}
            h={"100px"}
            borderLeft={"5px solid #0cc9e8"}
            rounded={"8px"}
            minW={["40%", "40%", "15%", "19%"]}
          >
            <Text fontSize={["l", "l", "xl", "xl"]}>Running</Text>
            <Heading>{stats.runningProjects}</Heading>
          </Stack>
          <Stack
            style={shadow}
            justify={"center"}
            p={"1rem"}
            bg={"white"}
            h={"100px"}
            borderLeft={"5px solid #0cc9e8"}
            rounded={"8px"}
            minW={["40%", "40%", "15%", "19%"]}
          >
            <Text fontSize={["l", "l", "xl", "xl"]}>Clouser Delay</Text>
            <Heading>{stats.delayedProjects}</Heading>
          </Stack>
          <Stack
            style={shadow}
            justify={"center"}
            p={"1rem"}
            bg={"white"}
            h={"100px"}
            borderLeft={"5px solid #0cc9e8"}
            rounded={"8px"}
            minW={["40%", "40%", "15%", "19%"]}
          >
            <Text fontSize={["l", "l", "xl", "xl"]}>Cancelled</Text>
            <Heading>{stats.cancelledProjects}</Heading>
          </Stack>
        </Flex>
        <Text ml={"50px"} fontSize={["20px", "20px", "25px", "25px"]}>
          Department wise - Total Vs Closed
        </Text>
        <Box
          ml={["20px", "20px", "50px", "50px"]}
          mt={"20px"}
          rounded={"15px"}
          p={["1rem", "1rem", "2rem", "2rem"]}
          pb={"0px"}
          h={"450px"}
          bg={"white"}
          w={["90%", "90%", "50%", "50%"]}
        >
          {departmentData ? <BarChart chartData={departmentData} /> : null}
          <Flex w={"100%"} gap={"30px"} m={"auto"} justify={"center"}>
            <Flex gap={"10px"} justify={"center"} align={"center"}>
              <Box bg={"#025aab"} h={"12px"} w={"12px"} rounded={"50%"}></Box>
              <Text>Running</Text>
            </Flex>
            <Flex gap={"10px"} justify={"center"} align={"center"}>
              <Box bg={"#5aa647"} h={"12px"} w={"12px"} rounded={"50%"}></Box>
              <Text>Closed</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
