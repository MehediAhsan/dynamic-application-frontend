import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/shared/DashboardSideNav";
import DashboardTopNav from "../components/shared/DashboardTopNav";

const DashboardLayout = () => {
  return (
    <div className="flex lg:gap-5 p-5 bg-[#111c28] text-[#C6C4DB]">
      <DashboardSideNav />
      <div className="flex flex-col gap-5 w-[100vw] lg:w-[calc(100vw-280px)] transition-all duration-500">
        <DashboardTopNav />
        <div className="bg-[#172437] rounded p-5 shadow shadow-[#7367F0] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
