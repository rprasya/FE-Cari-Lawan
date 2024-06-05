import { useState } from "react";
import axios from "axios";

// Login with middleware
// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("https://be-carilawan-production.up.railway.app/login", {
//         email,
//         password,
//       });

//       const token = response.data.token;
//       localStorage.setItem("token", token); // Simpan token ke localStorage

//       console.log('Login Berhasil!')
//       alert('Login Berhasil!')

//       // Arahkan ke halaman dashboard setelah login berhasil
//       window.location.href = "/protectPage";
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Email:</label>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <label>Password:</label>
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;





// login dengan coockies
// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     // Validasi email dan password
//     if (!email || !password) {
//       setError('Email dan password harus diisi.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post('https://be-carilawan-production.up.railway.app/login', { email, password });
//       const token = response.data.token;

//       // Simpan token di cookies
//       document.cookie = `token=${token}; path=/`;

//       // Redirect ke halaman yang membutuhkan token
//       window.location.href = '/protectedPage';
//     } catch (error) {
//       setError('Login gagal. Periksa email dan password Anda.');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Email:</label>
//       <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

//       <label>Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button type="submit" disabled={loading}>
//         {loading ? 'Loading...' : 'Login'}
//       </button>
//     </form>
//   );
// };

// export default LoginForm;




// login form cookies dari gemini
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https://be-carilawan-production.up.railway.app/login', {
//         email,
//         password,
//       });

//       console.log(response.data);
//       window.location.href = '/protectedPage';
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-20">
//       <div className="flex justify-center items-center">
//         <div className="w-full max-w-sm">
//           <form className="bg-white shadow rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-800 font-bold mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Login
//             </button>
//           </form>
//           {error && <div className="text-red-500 mt-2">{error}</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



// login form with style
// const Login = () => {
//   return (
//     <div className="flex justify-center items-center bg-primary h-screen">
//       <div className="bg-white p-3 rounded w-24">
//         <h2>Sign In</h2>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="email"><strong>Email</strong></label>
//             <input type="email" placeholder="Enter Email" name="email" className="form-control rounded-0" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password"><strong>Password</strong></label>
//             <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" />
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login;



import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['token']);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://be-carilawan-production.up.railway.app/login', {
        email,
        password,
      });
      const { token } = response.data;
      
      // Menyimpan token ke dalam cookies
      setCookie('token', token, { path: '/' });
      
      // Arahkan ke halaman setelah login berhasil
      window.location.href = '/protectedPage';
    } catch (error) {
      console.error('Login gagal:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
