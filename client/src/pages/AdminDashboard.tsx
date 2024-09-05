import React from "react";
import Sidebar from "../components/Sidebar";
import ProjectList from "../components/projects/ProjectList";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="relative flex items-end justify-center w-screen p-3">
        <ProjectList />
        <div className="flex items-center justify-between">
          <button className="absolute py-2 px-4 top-0 right-0 bg-green-300 hover:bg-green-500 rounded-lg transition-all ease-in">
            Add Project +
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
