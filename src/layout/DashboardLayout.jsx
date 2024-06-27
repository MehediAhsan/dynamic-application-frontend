import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/shared/DashboardSideNav";
import DashboardTopNav from "../components/shared/DashboardTopNav";

const DashboardLayout = () => {
  return (
    <div className="flex gap-5 p-5 bg-slate-200">
      <DashboardSideNav />
      <div className="flex flex-col gap-5 w-full">
        <DashboardTopNav />
        <div className="bg-yellow-500 rounded">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
