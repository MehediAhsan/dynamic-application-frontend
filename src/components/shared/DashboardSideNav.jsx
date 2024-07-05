import { useContext } from "react";
import { SideNavOpenContext } from "../../context/SiveNavOpenProvider";

const DashboardSideNav = () => {
  const { sideNavOpen } = useContext(SideNavOpenContext);

  return (
    <div
      className={`bg-[rgb(23,36,55)] rounded min-h-screen w-[280px] lg:block ${
        sideNavOpen
          ? "fixed top-0 left-0 transition-all duration-300 translate-x-0"
          : "hidden"
      }`}
    >
      <h1 className="mx-4 py-6 text-3xl font-semibold italic tracking-widest border-b border-gray-500">
        Logo
      </h1>
    </div>
  );
};

export default DashboardSideNav;
