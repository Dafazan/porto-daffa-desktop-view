import React, { useState } from "react";
import { useAppContext } from "../../AppContext";
import { ExplorerIconStatic, ExplorerIconStaticBig } from "../icons/explorer";
import Recents from "./window/explorer/recents";
import Draggable from "react-draggable";
import Sentmail from "./window/mailer/sentmail";

interface RecentsProps {
  zindex: string;
}

const Mailer = () => {
  const [fullwindow, setFullwindow] = useState(false);
  const { toggleMailtop } = useAppContext();
  const togglefull = () => {
    setFullwindow((prev) => !prev);
  };
  const { toggleMail, toggleHideMail, hideMail } = useAppContext();
  return (
    <Draggable
      disabled={fullwindow === true ? true : false}
      position={fullwindow === true ? { x: 0, y: 0 } : undefined}
      defaultPosition={{ x: 340, y: 80 }}
    >
      <div
        onClick={toggleMailtop}
        className={`${
          fullwindow === true
            ? "w-screen h-screen"
            : "w-[600px] rounded-md overflow-hidden"
        } ${
          hideMail === true ? "hidden" : "block"
        } rounded-md  flex flex-col duration-200 pointer-events-auto`}
      >
        <div className="w-full h-8 flex justify-between items-center bg-white">
          <div>
            <p>Mail</p>
          </div>
          <div className="p-2 py-3 text-xs flex">
            <div
              className="rounded-s-md bg-blue-600 px-2 flex items-center justify-center"
              onClick={togglefull}
            >
              <img
                className={`${
                  fullwindow === true ? "rotate-180" : ""
                } duration-300`}
                src="/icons/minimize.svg"
                alt="v"
              />
            </div>
            <button onClick={toggleHideMail} className="shadow-box-button px-2">
              -
            </button>
            <div
              onClick={toggleMail}
              className="rounded-e-md bg-red-500 px-2 flex justify-center items-center"
            >
              <img src="/icons/close.svg" alt="x" />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col ">
            <div className="bg-blue-300 w-full px-2 text-white font-semibold">
              <p>My Mail</p>
            </div>
            <div
              className={`${
                fullwindow === true ? "h-screen" : "h-[400px]"
              } glass-sidebar duration-200 w-[170px] text-white px-2 py-4`}
            >
              <div className="flex flex-col gap-1 text-start items-start">
                <button>Compose</button>
                <button>Inbox</button>
              </div>
            </div>
          </div>
          <Sentmail className="bg-white" />
        </div>
      </div>
    </Draggable>
  );
};

export default Mailer;
