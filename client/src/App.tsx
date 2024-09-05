import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TaskDescription from "./components/tasks/TaskDescription";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/tasks" element={<Dashboard />}></Route>
        <Route path="/tasks/:id" element={<TaskDescription />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
