import { useContext, useState } from "react";
import { SideNavOpenContext } from "../../context/SiveNavOpenProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  {
    name: "Settings",
    children: [
      { name: "Profile", path: "/settings/profile" },
      { name: "Security", path: "/settings/security" },
    ],
  },
  { name: "Reports", path: "/reports" },
];

const DashboardSideNav = () => {
  const { sideNavOpen, setSideNavOpen } = useContext(SideNavOpenContext);
  const { theme } = useContext(ThemeContext);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div
      className={`${theme ? "bg-[#172437]" : "bg-white"} lg:rounded min-h-screen w-[280px] shadow shadow-primary lg:block ${
        sideNavOpen ? "fixed top-0 left-0 transition-all duration-300" : "hidden"
      }`}
    >
      <RxCross2
        className="absolute right-2 top-2 cursor-pointer bg-[#111C28] block lg:hidden"
        size={24}
        onClick={() => setSideNavOpen(!sideNavOpen)}
      />
      <h1 className="mx-4 py-6 text-3xl font-semibold italic tracking-widest border-b border-gray-500">
        Logo
      </h1>
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.children ? (
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-primary hover:bg-opacity-15"
                  onClick={() => toggleMenu(index)}
                >
                  {item.name}
                  {openMenus[index] ? <FaChevronDown /> : <FaChevronRight />}
                </button>
                {openMenus[index] && (
                  <div className="ml-6 border-l border-gray-400">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={child.path}
                        className="block px-4 py-2 hover:bg-primary hover:bg-opacity-15"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className="block px-4 py-2 hover:bg-primary hover:bg-opacity-15"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSideNav;
