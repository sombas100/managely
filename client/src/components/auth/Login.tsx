import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      console.log(res.data);

      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refesh_token", res.data.refresh);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.access}`;
      navigate("/tasks");
    } catch (err) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setError("Invalid username or password. Please try again.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="relative h-screen">
      <form onSubmit={handleSubmit} className="w-2/3 h-full  mx-auto">
        <div className="block items-center justify-center bg-white w-[500px] mx-auto h-[550px] translate-y-52">
          <h2 className="flex items-center justify-center w-full pt-3 translate-y-20 font-bold text-2xl">
            Start managing your projects
          </h2>
          <input
            className="flex items-center translate-y-32 w-full justify-center border hover:border-green-400 transition-all ease-in rounded-md bg-sky-100 p-2 mx-auto"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex items-center w-full translate-y-32 mt-5 justify-center border rounded-md bg-sky-100 p-2 mx-auto  hover:border-green-400 transition-all ease-in"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="flex translate-y-40 w-full text-sm">
            Don't have a Managely account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-xs text-sky-400 ml-2 translate-y-1 flex cursor-pointer hover:text-sky-600"
            >
              Register Here
            </span>
          </span>
          <button className="mx-auto w-full py-2 px-1 font-semibold text-white translate-y-44 bg-green-300 hover:bg-green-600 transition-all ease-in rounded-lg">
            Log In
          </button>
          {error && (
            <p className="flex" style={{ color: "red" }}>
              {error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
