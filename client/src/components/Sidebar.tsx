import React from "react";
import { navItems } from "../constants";

const Sidebar: React.FC = () => {
  return (
    <div className="absolute flex flex-col w-full h-auto z-50">
      <div className="absolute w-52 h-screen border-r-2 shadow-md">
        {navItems.map((navItem, index) => (
          <ul key={index}>
            <a
              href={navItem.href}
              key={index}
              className="flex flex-row items-center justify-center p-2 font-semibold mt-4 cursor-pointer hover:bg-green-200 transition-all ease-out"
            >
              {navItem.label}
            </a>
          </ul>
        ))}
        <div className="translate-y-44 bottom-0 p-2 flex flex-grow flex-row-reverse cursor-pointer items-end justify-center font-semibold hover:bg-green-200 transition-all ease-out">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
