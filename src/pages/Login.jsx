import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// komponen Login form menerima prop setToken untuk mengatur state token
// const Login = ({ setToken }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate(); // hook useNavigate untuk navigasi

//   // fungsi yang di panggil saat form di-submit
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // mengirim data email dan password ke server
//       const response = await axios.get(
//         "https://carilawan-api.vercel.app/api/users/",
//         {
//           email,
//           password,
//         }
//       );

//       // jika login berhasil server akan mengembalikan token
//       const token = response.data.token;
//       // menyimpan token di state dan localStorage
//       setToken(token);
//       localStorage.setItem("token", token);
//       setMessage("Token success");
//       // mengarahkan pengguna ke halaman protected
//       navigate.push("/protected");
//     } catch (error) {
//       // menampilkan pesan error jika login gagal
//       setMessage("Invalid credentials:", error);
//     }
//   };

//   return (
//     <div className="bg-blue-400 mt-6 p-5">
//       <div className="font-bold mb-4">Login page</div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <div className="mt-2">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//               required
//             />
//           </div>
//           <div className="mt-2">
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>
//           <button type="submit" className="bg-white px-2 py-1 rounded-md mt-2">Login</button>
//           {message && <p className="text-red-600 mt-2">{message}</p>}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://be-cari-lawan.vercel.app/api/users/",
        { email, password }
      );
      const token = response.data.token;

      // Simpan token di local storage
      localStorage.setItem("token", token);

      // Pindah ke page tertentu
      navigate("/protected");
    } catch (error) {
      setMessage("Registion failed. Please try again.");
    }
  };

  return (
    <div className="bg-blue-400 mt-6 p-5">
      <div className="font-bold mb-4">Login page</div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-white px-2 py-1 rounded-md mt-2">Login</button>
      </form>
      {message && <p className="text-red-600 mt-2">{message}</p>}
    </div>
  );
};

export default LoginForm;
