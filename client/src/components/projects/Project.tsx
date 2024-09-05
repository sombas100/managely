import React from "react";
import { ProjectItem } from "../../types/types";

const Project: React.FC<ProjectItem> = ({ name, description }) => {
  return (
    <div>
      <h1 className="z-10 font-bold text-3xl mb-2">{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Project;
