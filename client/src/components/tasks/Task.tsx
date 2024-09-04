import React, { useState } from "react";
import { TaskItem } from "../../types/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

const Task: React.FC<TaskItem> = ({ id, title, description, status }) => {
  return (
    <Card className="flex w-screen mx-auto">
      <CardHeader>
        <Heading size="xs" textTransform="uppercase">
          Task Reports
        </Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Heading>{title}</Heading>
          <Text pt="2" fontSize="sm">
            {description}
          </Text>
          {status && <Text fontSize="x-small">Status: {status}</Text>}
        </Box>
      </CardBody>
    </Card>
  );
};

export default Task;
