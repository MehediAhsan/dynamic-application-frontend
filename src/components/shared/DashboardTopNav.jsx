import { useContext } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { SideNavOpenContext } from "../../context/SiveNavOpenProvider";
import { IoMdNotifications } from "react-icons/io";
import { ThemeContext } from "../../context/ThemeProvider";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DashboardTopNav = () => {
  const { sideNavOpen, setSideNavOpen } = useContext(SideNavOpenContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  };

  return (
    <div className={`${theme ? "bg-[#172437]" : "bg-white"} rounded flex justify-between p-5 shadow-sm shadow-[#7367F0]`}>
      <h1 className="text-2xl font-semibold text-[#7367F0]">Dashboard</h1>
      <div className="flex gap-4 items-center">
        <FaBarsStaggered
          className="cursor-pointer block lg:hidden"
          onClick={() => setSideNavOpen(!sideNavOpen)}
        />
        {
          theme ?
            <MdOutlineDarkMode className="cursor-pointer" onClick={handleThemeToggle} size={24} /> :
            <MdOutlineLightMode className="cursor-pointer" onClick={handleThemeToggle} size={24} />
        }
        <IoMdNotifications size={24} />
        <img className="h-9 w-9 rounded-full shadow" src="https://avatars.githubusercontent.com/u/83613654?v=4" alt="" />
      </div>
    </div>
  );
};

export default DashboardTopNav;
