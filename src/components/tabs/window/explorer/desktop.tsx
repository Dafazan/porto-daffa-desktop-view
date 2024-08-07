import React from "react";
import { ExplorerIconStaticBig } from "../../../icons/explorer";

interface DesktopProps {
  className: string;
}

const Desktop: React.FC<DesktopProps> = ({ className }) => {
  return (
    <>
      <div className="glass-window w-full flex flex-col">
        <div className="bg-blue-300 w-full px-2 text-white font-semibold">
          <p>Desktop</p>
        </div>
        <div className="p-4">
          <div className={className}>
            <ExplorerIconStaticBig title={"Portfolio"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;
