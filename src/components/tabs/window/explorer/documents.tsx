import React from "react";
import { ExplorerIconStaticBig } from "../../../icons/explorer";

interface DocumentsProps {
  className: string;
}

const Documents: React.FC<DocumentsProps> = ({ className }) => {
  return (
    <>
      <div className="glass-window w-full flex flex-col">
        <div className="bg-blue-300 w-full px-2 text-white font-semibold">
          <p>Documents</p>
        </div>
        <div className="p-4">
          <div className={className}>
            <ExplorerIconStaticBig title={"Image Gallery"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
