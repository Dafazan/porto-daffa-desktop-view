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
          <p>Sent New Message</p>
        </div>
        <div className="flex flex-col gap-2 h-full p-4">
          <div className=" flex flex-col">
            <div className="w-full flex justify-between border-b border-blue-700">
              <p>To: Dafazan</p>
            </div>
            <div className="w-full flex justify-between border-b border-blue-700 h-8">
              <input
                type="text"
                placeholder="Subject"
                className="bg-transparent w-full border-none focus:outline-none placeholder-gray-500"
              />
            </div>
          </div>
          <div className="h-44 border border-blue-700"></div>
          <div className="flex justify-end">
            <button className="bg-blue-600 px-2 py-1 text-white rounded-md">
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sentmail;
