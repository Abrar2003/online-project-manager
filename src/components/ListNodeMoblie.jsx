import React, { useContext } from 'react'
import {
    Box,
    Button,
    Flex,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { RxDotFilled } from "react-icons/rx";
import { listContext } from '../pages/Project-list';


function ListNodeMoblie({
    _id,
    title,
    reason,
    type,
    division,
    department,
    location,
    status,
    category,
    priority,
    startDate,
    endDate
  }) {
    const updateStatus = useContext(listContext);
  return (
    <Box
          fontSize={"sm"}
          color={"gray.500"}
          bg={"white"}
          rounded={"20px"}
          p={"1.5rem"}
        >
          <Flex color={"black"} justify={"space-between"}>
            <Box>
              <Text fontSize={"md"} fontWeight={"bold"}>
                {title}
              </Text>
              <Text>{`${startDate.slice(0,10)} to ${endDate.slice(0,10)}`}</Text>
            </Box>
            <Text fontWeight={"bold"}>{status}</Text>
          </Flex>
          <Stack mt={"20px"}>
            <Text>
              Reason: <strong>{reason}</strong>
            </Text>
            <Flex align={"center"}>
              <Text>
                Type: <strong>{type}</strong>
              </Text>
              <RxDotFilled />
              <Text>
                Category: <strong>Quality {category}</strong>
              </Text>
            </Flex>
            <Flex align={"center"}>
              <Text>
                Div.: <strong>{division}</strong>
              </Text>
              <RxDotFilled />
              <Text>
                Dept.: <strong>{department}</strong>
              </Text>
            </Flex>
            <Text>
              Priority: <strong>{priority}</strong>
            </Text>
            <Text>
              Location: <strong>{location}</strong>
            </Text>
          </Stack>
            <Flex mt={"20px"} w={"100%"} justify={"space-between"}>
              <Button
                onClick={() => updateStatus(_id, "running")}
                rounded={"20px"}
                colorScheme="blue"
                variant={"solid"}
                w={"30%"}
              >
                Start
              </Button>
              <Button
                onClick={() => updateStatus(_id, "closed")}
                rounded={"20px"}
                colorScheme="blue"
                variant={"outline"}
                w={"30%"}
              >
                Close
              </Button>
              <Button
                onClick={() => updateStatus(_id, "cancled")}
                rounded={"20px"}
                colorScheme="blue"
                variant={"outline"}
                w={"30%"}
              >
                Cancle
              </Button>
            </Flex>
        </Box>
  )
}

export default ListNodeMoblie