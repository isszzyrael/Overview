"use client";
import { FC } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  size?: number;
  setChecked: (checked: boolean) => void;
  checkedBgColor?: string
}

const CheckBoxV2: FC<Props> = ({
  checked = false,
  setChecked,
  size = 20,
  className,
  checkedBgColor = 'bg-[#8B5CF6]',
  ...props
}) => {
  return (
    <button
      className={`flex justify-center items-center rounded-lg border border-solid border-[#CED2DA] p-px ${
        checked ? `${checkedBgColor}` : "bg-transparent"
      }`}
      style={{
        minWidth: size,
        minHeight: size,
      }}
      onClick={(e) => {
        e.stopPropagation()
        setChecked(!checked)
      }}
      {...props}
    >
      {checked && <IoCheckmarkSharp size={size -4} color="#ffffff" />}
    </button>
  );
};

export default CheckBoxV2;
