import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/shared/DashboardSideNav";
import DashboardTopNav from "../components/shared/DashboardTopNav";

const DashboardLayout = () => {
  return (
    <div className="flex lg:gap-5 p-5 bg-[#111c28] text-gray-200 min-h-screen">
      <DashboardSideNav />
      <div className="flex flex-col gap-5 w-[100vw] lg:w-[calc(100vw-280px)] transition-all duration-500">
        <DashboardTopNav />
        <div className="bg-[#172437] rounded p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
