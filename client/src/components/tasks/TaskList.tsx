import React, { useState, useEffect } from "react";
import Task from "./Task";
import axios from "axios";
import { TaskItem } from "../../types/types";

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [error, setError] = useState<string | null>(null);

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
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        tasks.map((tasks) => (
          <Task
            key={tasks.id}
            id={tasks.id}
            title={tasks.title}
            description={tasks.description}
            status={tasks.status}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
