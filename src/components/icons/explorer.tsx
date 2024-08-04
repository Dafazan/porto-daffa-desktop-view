import React, { ReactNode } from "react";

const ExplorerIcon = () => {
  return (
    <div className="">
      <svg
        className="w-[33px] h-[33px] hover:w-12 hover:h-12 duration-200"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="33" height="33" rx="5" fill="white" />
        <path
          d="M7.30273 10.3687V13.8851C7.30273 12.5507 8.15929 11.6761 9.15109 11.6761L17.2658 11.631C17.0542 11.4677 16.8428 11.2958 16.7064 11.0658C16.5427 10.7898 16.4544 10.4727 16.4544 10.1469C16.4544 9.27348 15.7463 8.56543 14.8729 8.56543H9.10601C8.11009 8.56543 7.30273 9.37279 7.30273 10.3687Z"
          fill="#789FEF"
        />
        <path
          d="M7.30273 13.5243C7.30273 12.4786 8.15046 11.6309 9.19618 11.6309H23.7126C24.7583 11.6309 25.606 12.4786 25.606 13.5243V22.4505C25.606 23.4963 24.7583 24.344 23.7126 24.344H9.19618C8.15046 24.344 7.30273 23.4963 7.30273 22.4505V13.5243Z"
          fill="#1B40CC"
        />
      </svg>
    </div>
  );
};
const ExplorerIconStatic = () => {
  return (
    <div className="">
      <svg
        className="w-[33px] h-[33px]"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="33" height="33" rx="5" fill="white" />
        <path
          d="M7.30273 10.3687V13.8851C7.30273 12.5507 8.15929 11.6761 9.15109 11.6761L17.2658 11.631C17.0542 11.4677 16.8428 11.2958 16.7064 11.0658C16.5427 10.7898 16.4544 10.4727 16.4544 10.1469C16.4544 9.27348 15.7463 8.56543 14.8729 8.56543H9.10601C8.11009 8.56543 7.30273 9.37279 7.30273 10.3687Z"
          fill="#789FEF"
        />
        <path
          d="M7.30273 13.5243C7.30273 12.4786 8.15046 11.6309 9.19618 11.6309H23.7126C24.7583 11.6309 25.606 12.4786 25.606 13.5243V22.4505C25.606 23.4963 24.7583 24.344 23.7126 24.344H9.19618C8.15046 24.344 7.30273 23.4963 7.30273 22.4505V13.5243Z"
          fill="#1B40CC"
        />
      </svg>
    </div>
  );
};

interface Interfaces {
  title: ReactNode;
}
const ExplorerIconStaticBig: React.FC<Interfaces> = ({ title }) => {
  return (
    <div className=" flex flex-col items-center text-blue-800">
      <svg
        width="71"
        height="62"
        viewBox="0 0 71 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6.99507V20.6355C0 15.4591 3.32266 12.0665 7.16995 12.0665L38.6478 11.8916C37.827 11.258 37.0067 10.5912 36.4777 9.69933C35.8425 8.62849 35.5 7.39859 35.5 6.1347C35.5 2.7466 32.7534 0 29.3653 0H6.99507C3.1318 0 0 3.1318 0 6.99507Z"
          fill="#789FEF"
        />
        <path
          d="M0 19.2355C0 15.179 3.28839 11.8906 7.34483 11.8906H63.6552C67.7116 11.8906 71 15.179 71 19.2355V53.8611C71 57.9175 67.7116 61.2059 63.6552 61.2059H7.34483C3.28839 61.2059 0 57.9175 0 53.8611V19.2355Z"
          fill="#1B40CC"
        />
      </svg>

      <h2 className="font-medium text-xs break-all line-clamp-1">{title}</h2>
    </div>
  );
};
export { ExplorerIcon, ExplorerIconStatic, ExplorerIconStaticBig };
