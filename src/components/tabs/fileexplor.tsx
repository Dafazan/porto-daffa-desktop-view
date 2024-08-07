import React, { useState } from "react";
import { useAppContext } from "../../AppContext";
import { ExplorerIconStatic, ExplorerIconStaticBig } from "../icons/explorer";
import Recents from "./window/explorer/recents";
import Draggable from "react-draggable";
import Desktop from "./window/explorer/desktop";
import Documents from "./window/explorer/documents";
import Downloads from "./window/explorer/downloads";

interface RecentsProps {
  zindex: string;
}
const Fileexplor = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [fullwindow, setFullwindow] = useState(false);
  const { toggleFiletop } = useAppContext();
  const togglefull = () => {
    setFullwindow((prev) => !prev);
  };
  const { toggleDiv1, hideDiv1, toggleHideDiv1 } = useAppContext();
  return (
    <Draggable
      disabled={fullwindow === true ? true : false}
      position={fullwindow === true ? { x: 0, y: 0 } : undefined}
      defaultPosition={{ x: 300, y: 50 }}
    >
      <div
        onClick={toggleFiletop}
        className={`${
          fullwindow === true
            ? "w-screen h-screen"
            : "w-[600px] rounded-md overflow-hidden"
        } ${hideDiv1 === true ? "hidden" : "block"}
        rounded-md  flex flex-col duration-200 pointer-events-auto`}
      >
        <div className="w-full h-8 flex justify-between items-center bg-white">
          <div>
            <ExplorerIconStatic />
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
            <button onClick={toggleHideDiv1} className="shadow-box-button px-2">
              -
            </button>
            <div
              onClick={toggleDiv1}
              className="rounded-e-md bg-red-500 px-2 flex justify-center items-center"
            >
              <img src="/icons/close.svg" alt="x" />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col ">
            <div className="bg-blue-300 w-full px-2 text-white font-semibold">
              <p>HOME</p>
            </div>
            <div
              className={`${
                fullwindow === true ? "h-screen" : "h-[400px]"
              } glass-sidebar duration-200 w-[170px] text-white px-2 py-4`}
            >
              <div className="flex flex-col gap-1 text-start items-start">
                <button
                  onClick={() => setCurrentTab(0)}
                  className="flex gap-2 hover:text-blue-300 items-center"
                >
                  <img src="/icons/recents.svg" alt="icons" />
                  <p>Recents</p>
                </button>
                <button
                  onClick={() => setCurrentTab(1)}
                  className="flex gap-2 hover:text-blue-300 items-center"
                >
                  <img src="/icons/desktop.svg" alt="icons" />
                  <p>Desktop</p>
                </button>
                <button
                  onClick={() => setCurrentTab(2)}
                  className="flex gap-2 hover:text-blue-300 items-center"
                >
                  <img src="/icons/docs.svg" alt="icons" />
                  <p>Document</p>
                </button>
                <button
                  onClick={() => setCurrentTab(3)}
                  className="flex gap-2 hover:text-blue-300 items-center"
                >
                  <img src="/icons/download.svg" alt="icons" />
                  <p>Download</p>
                </button>
              </div>
            </div>
          </div>
          {/* STATE FOLDER */}
          {currentTab === 0 ? (
            <Recents
              className={`grid ${
                fullwindow === true ? "grid-cols-8" : "grid-cols-4"
              } gap-5 duration-200`}
            />
          ) : currentTab === 1 ? (
            <Desktop
              className={`grid ${
                fullwindow === true ? "grid-cols-8" : "grid-cols-4"
              } gap-5 duration-200`}
            />
          ) : currentTab === 2 ? (
            <Documents
              className={`grid ${
                fullwindow === true ? "grid-cols-8" : "grid-cols-4"
              } gap-5 duration-200`}
            />
          ) : currentTab === 3 ? (
            <Downloads
              className={`grid ${
                fullwindow === true ? "grid-cols-4" : "grid-cols-2"
              } gap-5 duration-200`}
            />
          ) : null}
        </div>
      </div>
    </Draggable>
  );
};

export default Fileexplor;
