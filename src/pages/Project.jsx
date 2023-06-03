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
  Icon,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MdArrowBackIosNew, MdLogout } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Project() {
  const initialForm = {
    title: "",
    reason: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    department: "",
    startDate: "",
    endDate: "",
    location: "",
  };
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const isError = form.title === "";
  const onChange = (e) => {
    const { name: key, value, type, valueAsNumber } = e.target;
    const val = type == "date" ? valueAsNumber : value;
    setForm({
      ...form,
      [key]: val,
    });
  };
  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/");
    }
  }, []);
  const onSubmit = async () => {
    for (let key in form) {
      if (form[key] == "") {
        alert("please fill all the fields");
        return;
      }
      if (form.startDate > form.endDate) {
        alert("Start date cannot be less than End date");
        return;
      }
    }
    try {
      let res = await axios.post(
        "http://localhost:8080/project/new-project",
        form
      );
      if (res.data.success) {
        navigate("/project-list");
      }
    } catch (err) {
      alert(
        "Project not saved due to some technical error try again some time later"
      );
    }
  };
  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };
  return (
    <Box bgColor="#eef2f5" boxSizing="border-box" h={["auto","auto","100vh","100vh"]}>
      <Navbar />
      <Box pl={["0px", "0px", "60px", "60px"]} w={"100%"}>
        <Box  w="100%">
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
              Create Project
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

        <Stack
          p={"70px 0"}
          justifyContent={"center"}
          align={"center"}
          w={"100%"}
          m={"auto"}
          gap={"25px"}

          boxSizing="border-box"
          display={["flex", "flex", "none", "none"]}
        >
          <Stack
            gap={"40px"}
            w={"90%"}
            m={"auto"}
            bg={"white"}
            rounded={"25px"}
            boxSizing="border-box"
            p={"2rem"}
          >
            <FormControl w="100%" isInvalid={isError}>
              <Textarea
                onChange={onChange}
                name="title"
                placeholder="Enter Project Theme"
              />
              <FormErrorMessage>Project Theme required</FormErrorMessage>
            </FormControl>
            
            <Box>
              <FormLabel>Reason</FormLabel>
              <Select
                size={"lg"}
                placeholder="Select the Reason"
                name="reason"
                onChange={onChange}
              >
                <option value={"Business"}>For Business</option>
                <option value={"Transport"}>For Transport</option>
                <option value={"Dealership"}>For Dealership</option>
              </Select>
            </Box>
            <Box>
              <FormLabel>Type</FormLabel>
              <Select
                size={"lg"}
                placeholder="Select the Type"
                name="type"
                onChange={onChange}
              >
                <option value={"Internal"}>Internal</option>
                <option value={"External"}>External</option>
                <option value={"Vendor"}>Vendor</option>
              </Select>
            </Box>
            <Box>
              <FormLabel>Division</FormLabel>
              <Select
                size={"lg"}
                placeholder="Select the Division"
                name="division"
                onChange={onChange}
              >
                <option value={"Filter"}>Filter</option>
                <option value={"Compressor"}>Compressor</option>
                <option value={"Pump"}>Pumps</option>
                <option value={"Glass"}>Glass</option>
              </Select>
            </Box>
            <Box>
              <FormLabel>Category</FormLabel>
              <Select
                size={"lg"}
                placeholder="Select the Category"
                name="category"
                onChange={onChange}
              >
                <option value={"A"}>Quality A</option>
                <option value={"B"}>Quality B</option>
                <option value={"C"}>Quality C</option>
                <option value={"D"}>Quality D</option>
              </Select>
            </Box>
            <Box>
              <FormLabel>Priority</FormLabel>
              <Select
                size={"lg"}
                placeholder="Select the Priority"
                name="priority"
                onChange={onChange}
              >
                <option value={"High"}>High</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Low"}>Low</option>
              </Select>
            </Box>
            <Box>
              <FormLabel>Department</FormLabel>
              <Select
                size={"lg"}
                placeholder="Select the Department"
                name="department"
                onChange={onChange}
              >
                <option value={"Strategy"}>Strategy</option>
                <option value={"Finance"}>Finance</option>
                <option value={"HR"}>HR</option>
                <option value={"Maintenance"}>Maintenance</option>
                <option value={"Quality"}>Quality</option>
                <option value={"Stores"}>Stores</option>
              </Select>
            </Box>
            <Box>
              <FormLabel>Start Date</FormLabel>
              <Input
                name="startDate"
                type="date"
                size={"lg"}
                onChange={onChange}
              />
            </Box>
            <Box>
              <FormLabel>End Date</FormLabel>
              <Input
                name="endDate"
                type="date"
                size={"lg"}
                onChange={onChange}
              />
            </Box>
            <Box>
              <FormLabel>Location</FormLabel>
              <Select
                name="location"
                placeholder="Select the Location"
                size={"lg"}
                onChange={onChange}
              >
                <option value={"Delhi"}>Delhi</option>
                <option value={"Pune"}>Pune</option>
                <option value={"Mumbai"}>Mumbai</option>
              </Select>
            </Box>
            <Flex pr={"100px"} w={"90%"} justify={"flex-end"}>
              <Text>
                Status: <strong>Registered</strong>
              </Text>
            </Flex>
            <Button
              onClick={onSubmit}
              bg={"#035fb2"}
              color={"white"}
              width={"100%"}
              rounded={"25px"}
              fontWeight={"400"}
              m={"auto"}
            >
              Save Project
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Project;
