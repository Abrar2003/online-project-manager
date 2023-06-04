import {
  Stack,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React from "react";
import ProjectListNode from "./ProjectListNode";
import ListNodeMoblie from "./ListNodeMoblie";

function ProjectTable({ data }) {
  return (
    <>
      <TableContainer display={["none", "none", "block", "block"]} mb={"50px"}>
        <Table variant={"simple"} w={"100%"}>
          <Thead bg={"#ebf5ff"}>
            <Tr>
              <Th>Project Name</Th>
              <Th>Reason</Th>
              <Th>Type</Th>
              <Th>Division</Th>
              <Th>Category</Th>
              <Th>Priority</Th>
              <Th>Dept.</Th>
              <Th>Location</Th>
              <Th>Status</Th>
              <Th>{}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((el) => (
              <ProjectListNode key={el._id} {...el} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Stack display={["flex", "flex", "none", "none"]} mt={"20px"} w={"100%"} mb={"50px"}>
        {
          data.map(el => <ListNodeMoblie key={el._id} {...el} />)
        }
      </Stack>
    </>
  );
}

export default ProjectTable;
