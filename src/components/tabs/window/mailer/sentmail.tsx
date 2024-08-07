import React from "react";
import { ExplorerIconStaticBig } from "../../../icons/explorer";

interface SentmailProps {
  className: string;
}

const Sentmail: React.FC<SentmailProps> = ({ className }) => {
  return (
    <>
      <div className="glass-window w-full flex flex-col">
        <div className="bg-blue-300 w-full px-2 text-white font-semibold">
          <p>Sent New Mail</p>
        </div>
        <div className="p-4"></div>
      </div>
    </>
  );
};

export default Sentmail;
