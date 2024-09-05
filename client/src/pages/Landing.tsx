import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <main className="relative w-full h-screen">
      <div className="w-1/3 h-80 blur-3xl absolute bg-green-300 rounded-[60%]"></div>
      <div className="bottom-0 right-0 absolute -translate-x-70 h-80 float-right w-1/3 translate-x-96 blur-3xl rounded-[50%] bg-green-300"></div>
      <div className="block justify-center items-center translate-y-72	 w-2/4 h-3/4 mx-auto">
        <h1 className="mb-24 font-bold tracking-wide text-5xl">
          Welcome to Managely
        </h1>

        <p className="mb-10 text-base font-medium">
          Managely is a project management tool that allows users to assign
          projects and tasks to members of staff. Includes the current status of
          projects and tasks aswell as an admin dashboard for overview.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="py-2 px-3 translate-x-64 bg-green-400 hover:bg-green-700 transition-all ease-out rounded-lg font-semibold text-white"
        >
          Get Started &rarr;
        </button>
      </div>
    </main>
  );
};

export default Landing;
