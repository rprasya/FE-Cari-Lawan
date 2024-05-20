/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

const Register = () => {
  // state untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // state untuk menyimpan feedback
  const [message, setMessage] = useState("");

  // Fungsi untuk menangani perubahan pada input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // fungsi untuk menangani perubahan pada input form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // mengirim data form ke server menggunakan Axios
      const response = await axios.post(
        "https://be-cari-lawan.vercel.app/api/users/",
        formData
      );
      setMessage("Registion success.");
    } catch (error) {
      // menangani error respons
      setMessage("Registion failed. Please try again.");
      console.log("error:", error)
    }
  };

  return (
    <div className="bg-blue-400 mt-6 p-5">
      <div className="font-bold mb-4">Register page</div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mt-2">
            <label>Fullname:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-2">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-2">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-2">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="bg-white px-2 py-1 rounded-md mt-2">
          Register
        </button>
      </form>
      {message && <p className="text-red-600 mt-2">{message}</p>}
    </div>
  );
};

export default Register;
