import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdMoreHoriz,
} from "react-icons/md";

function Pagination({ current, total, changePage }) {
    const shadow = {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      };
  return (
    <Flex p={"1rem"} style={shadow} bg={"white"} rounded={"10px"} m={"auto"} justify={"center"} align={"center"} mb={"30px"}>
      <Button
        p={"0"}
        fontSize={"xl"}
        variant={"link"}
        colorScheme="blue"
        disabled={true}
        onClick={() => changePage("l2",-2)}
      >
        <MdKeyboardDoubleArrowLeft />
      </Button>
      <Button
        p={"0"}
        fontSize={"xl"}
        variant={"link"}
        colorScheme="blue"
        disabled={true}
        onClick={() => changePage("l1",-1)}
      >
        <MdKeyboardArrowLeft />
      </Button>
      <Button p={"0"} fontSize={"xl"} variant={"link"} colorScheme="blue">
        {current}
      </Button>
      <Button variant={"link"} colorScheme="blue" fontSize={"xl"}>
        <MdMoreHoriz />
      </Button>
      <Button p={"0"} fontSize={"xl"} variant={"link"} colorScheme="blue">
        {total}
      </Button>
      <Button
        p={"0"}
        fontSize={"xl"}
        variant={"link"}
        colorScheme="blue"
        onClick={() => changePage("r1",+1)}
        disabled={current + 1 === total}
      >
        <MdKeyboardArrowRight />
      </Button>
      <Button
        p={"0"}
        fontSize={"xl"}
        variant={"link"}
        colorScheme="blue"
        onClick={() => changePage("r2",+2)}
        disabled={current + 2 === total}
      >
        <MdKeyboardDoubleArrowRight />
      </Button>
    </Flex>
  );
}

export default Pagination;
