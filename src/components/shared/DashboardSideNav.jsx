import { useContext } from "react";
import { SideNavOpenContext } from "../../context/SiveNavOpenProvider";
import { RxCross2 } from "react-icons/rx";

const DashboardSideNav = () => {
  const { sideNavOpen, setSideNavOpen } = useContext(SideNavOpenContext);

  return (
    <div
      className={`bg-[#172437] lg:rounded min-h-screen w-[280px] shadow shadow-[#7367F0] lg:block ${sideNavOpen
          ? "fixed top-0 left-0 transition-all duration-300"
          : "hidden"
        }`}
    >
      <RxCross2 className="absolute right-2 top-2 cursor-pointer bg-[#111C28] block lg:hidden" size={24} onClick={() => setSideNavOpen(!sideNavOpen)} />
      <h1 className="mx-4 py-6 text-3xl font-semibold italic tracking-widest border-b border-gray-500">
        Logo
      </h1>
    </div>
  );
};

export default DashboardSideNav;
