import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/shared/DashboardSideNav";
import DashboardTopNav from "../components/shared/DashboardTopNav";

const DashboardLayout = () => {
  return (
    <div className="flex gap-5 p-5 bg-[#1C2B3E] text-gray-200">
      <div className="w-[15%]">
        <DashboardSideNav />
      </div>
      <div className="flex flex-col gap-5 w-[85%]">
        <DashboardTopNav />
        <div className="bg-[#172437] rounded p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
