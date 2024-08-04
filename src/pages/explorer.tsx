import React, { useState } from "react";
import Draggable from "react-draggable";
import { useAppContext } from "../AppContext";
import ExplorerIcon from "../components/icons/explorer";
import { motion } from "framer-motion";

const Window = () => {};
const Explorer = () => {
  const [fullwindow, setFullwindow] = useState(false);

  const togglefull = () => {
    setFullwindow((prev) => !prev);
  };

  const { showDiv1, showDiv2 } = useAppContext();
  const { toggleDiv1 } = useAppContext();
  return (
    <div>
      {showDiv1 && (
        <Draggable
          disabled={fullwindow === true ? true : false}
          position={fullwindow === true ? { x: 0, y: 0 } : undefined}
        >
          <div
            className={`${
              fullwindow === true ? "w-screen h-screen" : "w-[600px] h-[400px]"
            } rounded-md bg-white flex flex-col duration-200`}
          >
            <div className="w-full h-8 flex justify-between items-center">
              <div>
                <ExplorerIcon />
              </div>
              <div className="p-2 py-3 text-xs flex">
                <button
                  className="rounded-s-md bg-blue-600 px-2"
                  onClick={togglefull}
                >
                  v
                </button>
                <div className=" px-2">-</div>
                <button
                  onClick={toggleDiv1}
                  className="rounded-e-md bg-red-500 px-2"
                >
                  x
                </button>
              </div>
            </div>
            <div className="bg-blue-300 w-full px-2 text-white font-semibold">
              <p>HOME</p>
            </div>
            <button onClick={toggleDiv1}>X</button>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Explorer;
