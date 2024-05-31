import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-[430px] h-screen flex flex-col justify-center items-center bg-[#F6F5FA]">
      <div className="text-center">
        <div className="text-3xl font-bold text-black">CARILAWAN</div>
        <p className="font-semibold text-black">Tempat Cari Lawan Sepadan!</p>
      </div>
      <div className="flex flex-col mt-14 text-center">
        <Link
          to="/login"
          className="bg-[#1232D7] text-sm text-white font-semibold px-24 py-[11px] rounded-lg hover:bg-[#0D259F]"
        >
          LOGIN
        </Link>
        <Link
          to="/register"
          className="bg-[#1232D7] text-sm text-white font-semibold px-24 py-[11px] rounded-lg mt-6 hover:bg-[#0D259F]"
        >
          REGISTER
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
