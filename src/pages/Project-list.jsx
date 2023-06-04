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
} from "@chakra-ui/react";
import { MdArrowBackIosNew, MdLogout } from "react-icons/md";
import { BsFilterLeft } from "react-icons/bs";
import React, { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import ProjectTable from "../components/ProjectTable";
import axios from "axios";
import FilterDrawer from "../components/FilterDrawer";
import Pagination from "../components/Pagination";

async function getData(q) {
  let res = await axios("http://localhost:8080/project/?page="+q);
  return res.data;
}

export const listContext = createContext();

function Projectlist() {
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("");
  const [currentPage, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const sort = (value) => {
    axios
      .get(`http://localhost:8080/project/sort/${value}`)
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
  const changePage = (type,num) => {
    if(type === "l2" && currentPage <= 2){
      return;
    }
    if(type  === "l1" && currentPage === 1){
      return;
    }
    if(type === "r1" && currentPage === total){
      return;
    }
    if(type === "r2" && currentPage+1 >= total){
      return;
    }
    setPage(currentPage + num);
  }
  useEffect(() => {
    getData(currentPage).then((res) => {
      setList(res.data);
      setTotal(res.totalPages);
    });
  }, [status, currentPage]);
  return (
    <listContext.Provider value={updateStatus}>
      <Navbar />
      <Box
      mb={"70px"}
        bgColor="#eef2f5"
        boxSizing="border-box"
        h={"auto"}
        pt={["30px", "30px", "200px", "200px"]}
      >
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
            h={"auto"}
            boxSizing="boreder-box"
            bg={["none", "white", "white"]}
            p={"1.5rem"}
            rounded={"25px"}
          >
            <Flex align={"center"} justify={"center"}>
              <InputGroup size={"lg"}>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.500" />
                </InputLeftElement>
                <Input
                  border={"none"}
                  onChange={search}
                  borderBottom={"2px solid lightgray"}
                  w={["90%", "90%", "20%", "20%"]}
                  type="text"
                  placeholder="Search"
                />
              </InputGroup>
              <Flex
                justify={"center"}
                align={"center"}
                display={["none", "none", "flex", "flex"]}
                gap={"10px"}
                w={"20%"}
              >
                <Text color={"gray.500"}>Sort by:</Text>
                <Select
                  border={"none"}
                  borderBottom={"2px solid lightgray"}
                  type="text"
                  placeholder="Sort"
                  w={"70%"}
                  onChange={(e) => sort(e.target.value)}
                >
                  <option value="priority">Priority</option>
                  <option value="updatedAt">Recently Modified</option>
                  <option value="status">Status</option>
                  <option value="startDate">Start Date</option>
                  <option value="endDate">End Date</option>
                </Select>
              </Flex>
              <Box
                fontSize={"3xl"}
                display={["inline", "inline", "none", "none"]}
                onClick={onOpen}
              >
                <BsFilterLeft />
              </Box>
              <FilterDrawer
                sort={sort}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
              />
            </Flex>
            <ProjectTable data={list} />
            <Pagination current={currentPage} total={total} changePage={changePage} />
          </Box>
        </Box>
      </Box>
    </listContext.Provider>
  );
}

export default Projectlist;
