import React from "react";
import Icon from "./icons/icon";
import { ExplorerIcon } from "./icons/explorer";
import Setting from "./icons/setting";
import Mail from "./icons/mail";
import { useAppContext } from "../AppContext";

const Taskbar = () => {
  const { toggleDiv1, toggleMail } = useAppContext();
  return (
    <div>
      <div className="glass h-[52px] p-2 flex gap-3 items-end">
        <Icon />
        <div className=" h-full">
          <input
            type="text"
            className="input h-8 w-36"
            placeholder="Search..."
          />
        </div>
        <button onClick={toggleDiv1}>
          <ExplorerIcon />
        </button>
        <Setting />
        <button onClick={toggleMail}>
          <Mail />
        </button>
      </div>
    </div>
  );
};

export default Taskbar;
