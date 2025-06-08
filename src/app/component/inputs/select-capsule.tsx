"use client";
import { FC } from "react";

export interface Capsule {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  values: Capsule[];
  selected?: string;
  onSelect?: (value: string) => void;
}

const SelectCapsule: FC<Props> = ({
  label = "",
  values,
  onSelect = () => null,
  selected = "",
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-text-primary text-sm font-medium">{label}</div>
      <div className="flex items-center gap-2.5 flex-wrap">
        {values.map((value, index) => (
          <div
            key={index}
            className={`flex py-1.5 px-3 border border-solid border-[#E4E7EC] rounded-[999px] text-text-primary text-sm font-medium cursor-pointer ${
              value.value == selected ? "shadow-focusEffect" : "hover:shadow-focusEffect"
            }`}
            onClick={() => onSelect(value.value)}
          >
            {value.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCapsule;
