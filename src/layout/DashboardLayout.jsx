import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/shared/DashboardSideNav";
import DashboardTopNav from "../components/shared/DashboardTopNav";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const DashboardLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex lg:gap-5 p-5 min-h-screen ${theme ? "bg-[#111c28] text-[#C6C4DB]" : "bg-slate-100 text-black"} `}>
      <DashboardSideNav />
      <div className="flex flex-col gap-5 w-[100vw] lg:w-[calc(100vw-280px)] transition-all duration-500">
        <DashboardTopNav />
        <div className={`rounded p-5 shadow shadow-primary h-full ${theme ? "bg-[#172437]": "bg-white"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
