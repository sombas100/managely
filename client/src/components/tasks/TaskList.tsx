import React, { useState, useEffect } from "react";
import axios from "axios";
import { TaskItem } from "../../types/types";
import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Welcome from "../Welcome";
import Sidebar from "../Sidebar";

// Define status colors
const statusColors: { [key: string]: string } = {
  TODO: "red.500",
  IN_PROGRESS: "purple.500",
  COMPLETED: "green.500",
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Failed fetching tasks. Please try again later.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="relative flex w-screen">
        <Sidebar />
        <Card
          position="absolute"
          left="40%"
          padding="4"
          marginBottom="38px"
          height="150px"
        >
          <Heading textColor="gray.800" size="lg" textTransform="uppercase">
            <Welcome /> Your task reports
          </Heading>
        </Card>
        <div className="w-1/3 mx-auto translate-y-44">
          <div>
            {tasks.map((task) => {
              const statusColor = statusColors[task.status] || "gray.500";

              return (
                <Link key={task.id} to={`/tasks/${task.id}`}>
                  <Card
                    marginBottom="4"
                    padding="4"
                    borderRadius="md"
                    boxShadow="md"
                    bg="white"
                    _hover={{ shadow: "md", bg: "gray.50" }}
                  >
                    <Box
                      width="190px"
                      padding="2"
                      bg={statusColor}
                      color="white"
                      marginBottom="4"
                    >
                      <Text fontWeight="bold" color="black">
                        Status: {task.status}
                      </Text>
                    </Box>
                    <Heading size="md" marginBottom="2">
                      {task.title}
                    </Heading>
                    <Text>{task.description}</Text>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
