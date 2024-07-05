import { useState } from "react";
import { createContext } from "react";

export const SideNavOpenContext = createContext();

const SiveNavOpenProvider = ({ children }) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navValue = { sideNavOpen, setSideNavOpen };

  return (
    <SideNavOpenContext.Provider value={navValue}>
      {children}
    </SideNavOpenContext.Provider>
  );
};

export default SiveNavOpenProvider;
