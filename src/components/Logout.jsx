const Logout = () => {
    const handleLogout = () => {
      // Menghapus token dari localStorage
      localStorage.removeItem('token');
  
      // Redirect ke halaman login atau update state aplikasi
      console.log('Logout successful!');
      alert('Logout successful!');

      // Arahkan ke halaman login setelah logout berhasil
      window.location.href = "/login";
    };
  
    return <button onClick={handleLogout}>Logout</button>;
  };
  
  export default Logout;