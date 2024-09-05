import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TaskList from "./components/tasks/TaskList";
import TaskDescription from "./components/tasks/TaskDescription";
import { TaskItem } from "./types/types";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/tasks" element={<TaskList />}></Route>
        <Route path="/tasks/:id" element={<TaskDescription />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
