import React from "react";
import { ExplorerIconStaticBig } from "../../../icons/explorer";

interface RecentsProps {
  className: string;
}

const Recents: React.FC<RecentsProps> = ({ className }) => {
  return (
    <>
      <div className="glass-window w-full flex flex-col">
        <div className="bg-blue-300 w-full px-2 text-white font-semibold">
          <p>Recents</p>
        </div>
        <div className="p-4">
          <div className={className}>
            <ExplorerIconStaticBig title={"Portfolio"} />
            <ExplorerIconStaticBig title={"My Fav Work"} />
            <ExplorerIconStaticBig title={"My Game"} />
            <ExplorerIconStaticBig title={"Image Gallery"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recents;
