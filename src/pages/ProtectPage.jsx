import Logout from "../components/Logout";

const ProtectPage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is a protected page. Only accessible when logged in.</p>
      <Logout />
    </div>
  );
};

export default ProtectPage;
