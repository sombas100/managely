import React, { useState } from "react";
import { TaskItem } from "../../types/types";
import { Card, CardBody, Box, Heading, Text } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

const Task: React.FC<TaskItem> = ({ id, title, description, status }) => {
  return (
    <Card marginTop="18px" className="flex w-[38rem] mx-auto">
      <Center>
        <CardBody>
          <Box marginTop="5px">
            <Heading>{title}</Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
            {status && <Text fontSize="x-small">Status: {status}</Text>}
          </Box>
        </CardBody>
      </Center>
    </Card>
  );
};

export default Task;
