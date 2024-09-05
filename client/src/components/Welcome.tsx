import React, { useState, useEffect } from "react";
import axios from "axios";
import { Employee } from "../types/types";

const Welcome: React.FC = () => {
  const [user, setUser] = useState<Employee | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching the user:", error);
        setError("Failed to load user data");
      });
  }, []);
  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : user ? (
        <h1>Welcome, {user.first_name ? user.first_name : user.username}</h1>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Welcome;
