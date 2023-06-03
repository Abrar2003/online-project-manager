import {
  Box,
  Flex,
  Image,
  Input,
  Select,
  Text,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { MdArrowBackIosNew, MdLogout } from "react-icons/md";
import React, { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import ProjectTable from "../components/ProjectTable";
import axios from "axios";

async function getData() {
  let res = await axios("http://localhost:8080/project/");
  return res.data;
}

export const listContext = createContext();

function Projectlist() {
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };
  const updateStatus = async (id, update) => {
    console.log(id, update);
    try {
      await axios.put(`http://localhost:8080/project/update-status/${id}`, {
        status: update,
      });
      setStatus(update);
    } catch (err) {
      console.log(err);
    }
  };
  const sort = (e) => {
    axios
      .get(`http://localhost:8080/project/sort/${e.target.value}`)
      .then((res) => setList(res.data));
  };
  const search = (e) => {
    if (e.target.value) {
      setTimeout(async () => {
        try {
          await axios
            .get(`http://localhost:8080/project/search/${e.target.value}`)
            .then((res) => setList(res.data));
        } catch (err) {
          console.log(err);
        }
      }, 300);
    }
  };
  useEffect(() => {
    getData().then((res) => {
      setList(res);
    });
  }, [status]);
  return (
    <listContext.Provider value={updateStatus}>
      <Navbar />
      <Box bgColor="#eef2f5" boxSizing="border-box" h={"auto"} pt={"200px"}>
        <Box pl={["0px", "0px", "60px", "60px"]} w={"100%"}>
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
                Project Listing
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
          <Box
            w={"98%"}
            m={"auto"}
            h={"1500px"}
            boxSizing="boreder-box"
            bg={"white"}
            p={"1.5rem"}
            rounded={"25px"}
          >
            <Flex>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.500" />
                </InputLeftElement>
                <Input
                  border={"none"}
                  onChange={search}
                  borderBottom={"2px solid lightgray"}
                  w={"20%"}
                  type="text"
                  placeholder="Search"
                />
              </InputGroup>
              <Flex justify={"center"} align={"center"} gap={"10px"} w={"20%"}>
                <Text color={"gray.500"}>Sort by:</Text>
                <Select
                  border={"none"}
                  borderBottom={"2px solid lightgray"}
                  type="text"
                  placeholder="Sort"
                  w={"70%"}
                  onChange={sort}
                >
                  <option value="priority">Priority</option>
                  <option value="updatedAt">Recently Modified</option>
                  <option value="status">Status</option>
                  <option value="startDate">Start Date</option>
                  <option value="endDate">End Date</option>
                </Select>
              </Flex>
            </Flex>
            <ProjectTable data={list} />
          </Box>
        </Box>
      </Box>
    </listContext.Provider>
  );
}

export default Projectlist;
