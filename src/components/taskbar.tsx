import React from "react";
import Icon from "./icons/icon";
import Explorer from "./icons/explorer";
import Setting from "./icons/setting";
import Mail from "./icons/mail";

const Taskbar = () => {
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
        <Explorer />
        <Setting />
        <Mail />
      </div>
    </div>
  );
};

export default Taskbar;
