import React, { useState } from "react";
import Draggable from "react-draggable";
import { useAppContext } from "../AppContext";
import {
  ExplorerIconStatic,
  ExplorerIconStaticBig,
} from "../components/icons/explorer";
import Recents from "../components/explorer/recents";
//import { motion } from "framer-motion";

const Explorer = () => {
  const [fullwindow, setFullwindow] = useState(false);

  const togglefull = () => {
    setFullwindow((prev) => !prev);
  };

  const { showDiv1 } = useAppContext();
  const { toggleDiv1 } = useAppContext();
  return (
    <div>
      {showDiv1 && (
        <Draggable
          disabled={fullwindow === true ? true : false}
          position={fullwindow === true ? { x: 0, y: 0 } : undefined}
          defaultPosition={{ x: 300, y: 50 }}
        >
          <div
            className={`${
              fullwindow === true
                ? "w-screen h-screen"
                : "w-[600px] rounded-md overflow-hidden"
            } rounded-md  flex flex-col duration-200`}
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
                <div className="shadow-box-button px-2">-</div>
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
                    <button className="flex gap-2 hover:text-blue-300 items-center">
                      <img src="/icons/recents.svg" alt="icons" />
                      <p>Recents</p>
                    </button>
                    <button className="flex gap-2 hover:text-blue-300 items-center">
                      <img src="/icons/desktop.svg" alt="icons" />
                      <p>Desktop</p>
                    </button>
                    <button className="flex gap-2 hover:text-blue-300 items-center">
                      <img src="/icons/docs.svg" alt="icons" />
                      <p>Document</p>
                    </button>
                    <button className="flex gap-2 hover:text-blue-300 items-center">
                      <img src="/icons/download.svg" alt="icons" />
                      <p>Download</p>
                    </button>
                  </div>
                </div>
              </div>
              <Recents
                className={`grid ${
                  fullwindow === true ? "grid-cols-8" : "grid-cols-4"
                } gap-5 duration-200`}
              />
              {/* <div className="bg-white w-full flex flex-col">
                <div className="bg-blue-300 w-full px-2 text-white font-semibold">
                  <p>Recents</p>
                </div>
                <div className="p-4">
                </div>
              </div> */}
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Explorer;
