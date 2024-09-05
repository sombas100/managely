import { useState, useEffect } from "react";
import axios from "axios";
import { ProjectItem } from "../../types/types";
import Welcome from "../Welcome";
import { Card } from "@chakra-ui/react";

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[] | null>([]);
  const [error, setError] = useState<string | null>(null);

  try {
    const fetchProjects = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/projects/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = res.data;
      setProjects(data);
      if (!data) return console.log("Projects could not be found");
    };
    useEffect(() => {
      fetchProjects();
    }, []);
  } catch (error) {
    console.error("Error fetching projects:", error);
    setError("Failed fetching projects. Please try again later.");
  }
  return (
    <div className="-z-10 flex items-center min-w-80 w-screen h-full">
      <div className="flex items-center justify-center font-semibold translate-x-96">
        <Welcome /> List of current company projects
      </div>
      <div className="translate-x-40 flex flex-col items-center justify-start w-screen h-full ">
        {projects?.map((project) => (
          <>
            <Card
              width="300px"
              height="250px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin="10px"
            >
              <ul className="font-bold text-3xl mb-2">{project.name}</ul>
              <p className="text-medium">{project.description}</p>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
