import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TaskItem } from "../../types/types";
import { Box, Card, Heading, Text } from "@chakra-ui/react";
import Sidebar from "../Sidebar";

const TaskDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<TaskItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Define status colors
  const statusColors: { [key: string]: string } = {
    TODO: "red.500",
    IN_PROGRESS: "purple.500",
    COMPLETED: "green.500",
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

  // Get the status color
  const statusColor = statusColors[task.status] || "gray.500"; // Default to gray if status is unknown

  return (
    <>
      <Sidebar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        padding="4"
      >
        <Card
          width="450px"
          padding="8"
          borderRadius="md"
          boxShadow="md"
          bg="white"
        >
          <Box
            padding="4"
            bg={statusColor}
            color="white"
            borderRadius="md"
            marginBottom="4"
          >
            <Text fontWeight="bold" color="black">
              Status: {task.status}
            </Text>
          </Box>
          <Heading size="lg" marginBottom="4">
            {task.title}
          </Heading>
          <Text marginBottom="4">{task.description}</Text>
        </Card>
      </Box>
    </>
  );
};

export default TaskDescription;
