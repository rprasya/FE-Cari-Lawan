import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Komponen Login form menerima prop setToken untuk mengatur state token
const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // hook useNavigate untuk navigasi

  // Fungsi yang dipanggil saat form di-submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Mengirim data email dan password ke server
      const response = await axios.get(
        "https://be-carilawan-production.up.railway.app/api/users/",
        {
          email,
          password,
        }
      );

      // Jika login berhasil server akan mengembalikan token
      const token = response.data.token;
      // Menyimpan token di state dan localStorage
      setToken(token);
      localStorage.setItem("token", token);
      setMessage("Token success");
      // Mengarahkan pengguna ke halaman protected
      navigate.push("/protected");
    } catch (error) {
      // Menampilkan pesan error jika login gagal
      setMessage("Invalid credentials:", error);
    }
  };

  return (
    <div className="bg-blue-400 mt-6 p-5">
      <div className="font-bold mb-4">Login page</div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mt-2">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mt-2">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="bg-white px-2 py-1 rounded-md mt-2">
            Login
          </button>
          {message && <p className="text-red-600 mt-2">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
