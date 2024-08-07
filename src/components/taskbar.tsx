import React from "react";
import Icon from "./icons/icon";
import { ExplorerIcon } from "./icons/explorer";
import Setting from "./icons/setting";
import Mail from "./icons/mail";
import { useAppContext } from "../AppContext";

const Taskbar = () => {
  const {
    toggleDiv1,
    toggleMail,
    showDiv1,
    showMail,
    toggleHideDiv1,
    hideDiv1,
    toggleHideMail,
    hideMail,
  } = useAppContext();

  const handleExplorer = () => {
    if (!showDiv1) {
      toggleDiv1();
    } else {
      toggleHideDiv1();
    }
  };

  const handleMail = () => {
    if (!showMail) {
      toggleMail();
    } else {
      toggleHideMail();
    }
  };
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
        <button onClick={handleExplorer}>
          <div className="flex items-center gap-[1px]">
            {showDiv1 === true ? (
              <div
                className={`${
                  hideDiv1 === true ? "h-[10px]" : "h-[25px]"
                } bg-blue-500 w-1  rounded-full duration-200`}
              ></div>
            ) : null}
            <ExplorerIcon />
          </div>
        </button>
        <button>
          <div className="flex items-center gap-[1px]">
            {/* <div className="bg-blue-500 w-1 h-[25px] rounded-full"></div> */}
            <Setting />
          </div>
        </button>

        <button onClick={handleMail}>
          <div className="flex items-center gap-[1px]">
            {showMail === true ? (
              <>
                <div
                  className={`${
                    hideMail === true ? "h-[10px]" : "h-[25px]"
                  } bg-blue-500 w-1  rounded-full duration-200`}
                ></div>
              </>
            ) : null}

            <Mail />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Taskbar;
