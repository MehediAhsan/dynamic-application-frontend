import { useContext } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { SideNavOpenContext } from "../../context/SiveNavOpenProvider";

const DashboardTopNav = () => {
    const {sideNavOpen, setSideNavOpen} = useContext(SideNavOpenContext);

    console.log(sideNavOpen);
    return (
        <div className="bg-[#172437] rounded flex justify-between p-5">
            <h1 className="text-2xl font-semibold">Title</h1>
            <div className="flex gap-2 items-center">
                <span><FaBarsStaggered /></span>
                <span>Profile</span>
                <span>Profile</span>
                <span>Profile</span>
            </div>
        </div>
    );
};

export default DashboardTopNav;