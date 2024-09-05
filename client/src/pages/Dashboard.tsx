import React from "react";
import TaskList from "../components/tasks/TaskList";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div>
        <TaskList />
      </div>
    </>
  );
};

export default Dashboard;
