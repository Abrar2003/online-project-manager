import { Button, Flex, Td, Text, Tr } from "@chakra-ui/react";
import React, { useContext } from "react";
import { listContext } from "../pages/Project-list";

function ProjectListNode({
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
  endDate,
}) {
  const updateStatus = useContext(listContext);
  return (
    <>
      <Tr>
        <Td>
          <Text fontWeight={"bold"}>{title}</Text>
          <Text>{`${startDate.slice(0, 10)} to ${endDate.slice(0, 10)}`}</Text>
        </Td>
        <Td>{reason}</Td>
        <Td>{type}</Td>
        <Td>{division}</Td>
        <Td>Quality {category}</Td>
        <Td>{priority}</Td>
        <Td>
          {department === "STR" ? "Strategy" : null}
          {department === "FIN" ? "Finance" : null}
          {department === "MAN" ? "Maintenance" : null}
          {department === "QLT" ? "Quality" : null}
          {department === "STO" ? "Store" : null}
          {department === "HR" ? "HR" : null}
        </Td>
        <Td>{location}</Td>
        <Td>{status}</Td>
        <Td pr={"-20"} mr={"-30px"}>
          <Flex gap={"10px"}>
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
              onClick={() => updateStatus(_id, "cancelled")}
              rounded={"20px"}
              colorScheme="blue"
              variant={"outline"}
              w={"30%"}
            >
              Cancle
            </Button>
          </Flex>
        </Td>
      </Tr>
    </>
  );
}

export default ProjectListNode;
