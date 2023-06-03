import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Text,
} from "@chakra-ui/react";

function FilterDrawer({ isOpen, onOpen, onClose, sort }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sort Projects By</DrawerHeader>

          <DrawerBody pb={"50px"}>
            <Stack gap={"10px"}>
              <Text
                onClick={() => {
                  sort("priority");
                  onClose();
                }}
              >
                Priority
              </Text>
              <Text
                onClick={() => {
                  sort("updatedAt");
                  onClose();
                }}
              >
                Recently Modified
              </Text>
              <Text
                onClick={() => {
                  sort("status");
                  onClose();
                }}
              >
                Status
              </Text>
              <Text
                onClick={() => {
                  sort("startDate");
                  onClose();
                }}
              >
                Start Date
              </Text>
              <Text
                onClick={() => {
                  sort("endDate");
                  onClose();
                }}
              >
                End Date
              </Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FilterDrawer;
