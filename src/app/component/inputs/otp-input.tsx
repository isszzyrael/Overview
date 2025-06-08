"use client";

import { FC, useRef, useState } from "react";

interface Props {
  length: number;
  onChange: (otp: string) => void;
}

const OTPInput: FC<Props> = ({ length, onChange }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChange(newOtp.join(""));
      // Move focus to the next input box
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
        onChange(newOtp.join(""));
      } else if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      if (/^\d$/.test(pasteData[i])) {
        newOtp[i] = pasteData[i];
      }
    }
    setOtp(newOtp);
    onChange(newOtp.join(""));
    if (pasteData.length > 0) {
      inputRefs.current[Math.min(pasteData.length, length) - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-3">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          value={otp[index]}
          maxLength={1}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="py-4 px-3 h-[56px] w-[60px] border border-solid border-[#E4E7EC] rounded-[10px] text-text-primary text-2xl font-medium text-center"
        />
      ))}
    </div>
  );
};

export default OTPInput;
