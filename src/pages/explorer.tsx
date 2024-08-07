import React, { useState } from "react";
import { useAppContext } from "../AppContext";
import Fileexplor from "../components/tabs/fileexplor";
import Mailer from "../components/tabs/mailer";

const Explorer: React.FC = () => {
  const { showDiv1, showMail, topFile, topMail } = useAppContext();

  const [topDiv, setTopDiv] = useState<string | null>(null);

  const handleClick = (divName: string) => {
    setTopDiv(divName);
  };

  return (
    <div className="relative ">
      {showDiv1 && (
        <div
          className={`absolute w-screen h-screen pointer-events-none ${
            topFile === true ? "z-10" : "z-0"
          }`}
        >
          <Fileexplor />
        </div>
      )}
      {showMail && (
        <div
          className={`absolute w-screen h-screen pointer-events-none ${
            topMail === true ? "z-10" : "z-0"
          }`}
        >
          <Mailer />
        </div>
      )}
    </div>
  );
};

export default Explorer;
