import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TaskItem } from "../../types/types";
import { Box, Card, Heading, Text } from "@chakra-ui/react";

const TaskDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<TaskItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  const statusColors: { [key: string]: string } = {
    TODO: "red.300",
    IN_PROGRESS: "purple.300",
    COMPLETED: "green.300",
  };

  const fetchTask = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setTask(res.data);
    } catch (error) {
      console.error("Error fetching task:", error);
      setError("Failed fetching task details. Please try again later.");
    }
  };

  useEffect(() => {
    fetchTask();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen">
      <Card
        display="flex"
        justifyContent="center"
        alignItems="center"
        left="50%"
        top="40%"
        translateX="50%"
        translateY="40%"
        width="450px"
        height="200px"
      >
        <Box
          paddingX="5rem"
          bg={statusColors}
          padding="8px"
          width="fit-cover"
          borderRadius="8px"
        >
          <Heading marginBottom="30px">{task.title}</Heading>
          <Text>{task.description}</Text>
          <Text fontWeight="bold">Status: {task.status}</Text>
        </Box>
      </Card>
    </div>
  );
};

export default TaskDescription;
