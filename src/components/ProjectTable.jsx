import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import ProjectListNode from "./ProjectListNode";

function ProjectTable({data}) {
  return (
    <TableContainer>
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
          {
            data.map(el => 
              <ProjectListNode key={el._id} {...el} />
            )
          }
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ProjectTable;
