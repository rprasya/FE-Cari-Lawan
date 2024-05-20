import {Routes, Route, Link} from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedPage from "./pages/ProtectedPage";

const App = () => {
  return (
    <>
      <h1 className="font-bold text-2xl">Cari lawan 🚀🚀</h1>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </>
  );
}

export default App;