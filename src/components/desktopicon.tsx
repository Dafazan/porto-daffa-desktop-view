import React from "react";
import { ExplorerIconStaticBigW } from "./icons/explorer";
import Draggable from "react-draggable";

const DesktopIcon = () => {
  return (
    <div className="grid grid-cols-8 py-10 px-3 w-full h-full">
      <Draggable>
        <div>
          <ExplorerIconStaticBigW title={"Portfolio"} />
        </div>
      </Draggable>
    </div>
  );
};

export default DesktopIcon;
