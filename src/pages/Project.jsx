import {
  Box,
  Button,
  Flex,
  FormLabel,
  Grid,
  Image,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  Icon
} from "@chakra-ui/react";
import { MdArrowBackIosNew } from "react-icons/md";
import React from "react";
import Navbar from "../components/Navbar";

function Project() {
  return (
    <Box bgColor="#eef2f5" boxSizing="border-box" h={"100vh"}>
      <Navbar />
      <Box pl={"60px"} w={"100%"}>
        <Image w={"100%"} src={require("../Assets/Header-bg.svg").default} />
        <Stack
          justifyContent={"center"}
          align={"center"}
          w={"100%"}
          m={"auto"}
          pos={"fixed"}
          top={"60px"}
          gap={"40px"}
          boxSizing="border-box"
        >
          <Flex
            w={"90%"}
            align={"center"}
            gap={"35%"}
          >
            <Flex justify={"center"} align={"center"} gap={"10px"} fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
              <MdArrowBackIosNew />
              Create Project
            </Flex>
            <Box>
              <Image src={require("../Assets/Logo.svg").default} />
            </Box>
          </Flex>
          <Stack
            gap={"60px"}
            w={"90%"}
            m={"auto"}
            bg={"white"}
            rounded={"50px"}
            h={"700px"}
            boxSizing="border-box"
            p={"2rem"}
          >
            <Flex justify={"space-between"}>
              <Box w="50%">
                <Textarea placeholder="Enter Project Theme" />
              </Box>
              <Button
                bg={"#035fb2"}
                color={"white"}
                width={"10%"}
                rounded={"25px"}
                fontWeight={"400"}
              >
                Save Project
              </Button>
            </Flex>
            <Grid gap={"30px"} templateColumns={"repeat(3, 1fr)"}>
              <Box>
                <FormLabel>Reason</FormLabel>
                <Select size={"lg"}>
                  <option>For Business</option>
                  <option>For Personal</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Type</FormLabel>
                <Select size={"lg"}>
                  <option>Internal</option>
                  <option>External</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Division</FormLabel>
                <Select size={"lg"}>
                  <option>Filter</option>
                  <option>Compressor</option>
                  <option>Pumps</option>
                  <option>Glass</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Category</FormLabel>
                <Select size={"lg"}>
                  <option>Quality A</option>
                  <option>Quality B</option>
                  <option>Quality C</option>
                  <option>Quality D</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Priority</FormLabel>
                <Select size={"lg"}>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Department</FormLabel>
                <Select size={"lg"}>
                  <option>Strategy</option>
                  <option>Strategy</option>
                  <option>Strategy</option>
                  <option>Strategy</option>
                  <option>Strategy</option>
                </Select>
              </Box>
              <Box>
                <FormLabel>Start Date</FormLabel>
                <Input type="date" size={"lg"} />
              </Box>
              <Box>
                <FormLabel>End Date</FormLabel>
                <Input type="date" size={"lg"} />
              </Box>
              <Box>
                <FormLabel>Location</FormLabel>
                <Select size={"lg"}>
                  <option>For Business</option>
                  <option>For Personal</option>
                </Select>
              </Box>
            </Grid>
            <Flex pr={"100px"} justify={"flex-end"}>
              <Text>Status: <strong>Registered</strong></Text>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Project;
