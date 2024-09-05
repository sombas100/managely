import React, { useState, useEffect } from "react";
import Task from "./Task";
import axios from "axios";
import { TaskItem, Employee } from "../../types/types";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import Welcome from "../Welcome";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [employee, setEmployee] = useState<Employee | null>(null);

  try {
    const fetchTasks = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = res.data;
      setTasks(data);
    };
    useEffect(() => {
      fetchTasks();
    }, []);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    setError("Failed fetching tasks. Please try again later.");
  }

  return (
    <Card className="w-full mx-auto">
      <Box>
        <CardHeader>
          <Heading
            textColor="gray
          "
            marginLeft="250px"
            size="sm"
            textTransform="uppercase"
          >
            <Welcome /> Your task reports
          </Heading>
        </CardHeader>
      </Box>
      {error ? (
        <div>{error}</div>
      ) : (
        tasks.map((task) => (
          <Link key={task.id} to={`/tasks/${task.id}`}>
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
            />
          </Link>
        ))
      )}
    </Card>
  );
};

export default TaskList;
