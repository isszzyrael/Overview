"use client";
import { FC } from "react";

interface Props {
  checked?: boolean;
  handleChange?: () => void;
}

const SwitchInput: FC<Props> = ({
  checked = false,
  handleChange = () => {},
}) => {
  return (
    <div
      className={`flex w-11 py-0.5 px-0.5 items-center rounded-[500px] cursor-pointer ${checked ? "justify-end bg-[#8B5CF6]" : "justify-start bg-[#97A1AF]"}`}
      onClick={handleChange}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="white" />
      </svg>
    </div>
  );
};

export default SwitchInput;
