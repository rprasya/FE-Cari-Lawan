import { useState } from "react";
import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Mengirimkan request ke server untuk mendapatkan token
//       const response = await axios.post(
//         "https://be-carilawan-production.up.railway.app/login",
//         {
//           email,
//           password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Mendapatkan token dari response
//       const token = response.data.token;

//       // Menyimpan token di localStorage
//       localStorage.setItem("token", token);

//       // Redirect ke halaman lain atau update state aplikasi
//       alert("Login berhasil!");
//     } catch (error) {
//       console.error("Login gagal:", error.response?.data || error.message);
//       alert("Login gagal! " + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <div>
//         <label>Email:</label>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

// components/LoginForm.js
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://be-carilawan-production.up.railway.app/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token); // Simpan token ke localStorage

      console.log('Login Berhasil!')
      alert('Login Berhasil!')

      // Arahkan ke halaman dashboard setelah login berhasil
      window.location.href = "/protectPage";
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
