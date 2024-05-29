import {Routes, Route, Link} from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedPage from "./pages/ProtectedPage";
import Intro from "./pages/Intro";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>

      {/* <div>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;