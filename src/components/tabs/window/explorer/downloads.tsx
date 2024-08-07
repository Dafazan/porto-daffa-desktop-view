import React from "react";
import { ExplorerIconStaticBig } from "../../../icons/explorer";

interface DownloadsProps {
  className: string;
}

const Downloads: React.FC<DownloadsProps> = ({ className }) => {
  return (
    <>
      <div className="glass-window w-full flex flex-col">
        <div className="bg-blue-300 w-full px-2 text-white font-semibold">
          <p>Downloads</p>
        </div>
        <div className="p-4">
          <div className={className}>
            <p>No File Founds..</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Downloads;
