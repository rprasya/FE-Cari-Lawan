import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectPage from "./pages/ProtectPage";
import Intro from "./pages/Intro";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>

      <div>
        <Link to="/intro">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protectPage" element={<ProtectPage />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;