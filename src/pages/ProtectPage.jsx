import { useEffect } from 'react';

const ProtectedPage = () => {
  useEffect(() => {
    const token = document.cookie.split('; ').find((cookie) => cookie.startsWith('token='));

    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div className='mt-9'>
      <h1>Halaman yang Dilindungi</h1>
      <p>Anda memiliki akses ke halaman ini karena Anda telah login.</p>
    </div>
  );
};

export default ProtectedPage;
