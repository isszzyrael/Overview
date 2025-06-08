'use client';

import React, { useState, useRef, ReactNode } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { FiHelpCircle } from 'react-icons/fi';

interface TextAreaProp {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => any;
  warning?: string;
  error?: string | ReactNode;
  success?: string;
  labelStyle?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  textAreaClassName?: string;
  description?: string;
  required?: boolean;
  showCount?: boolean;
  maxLength?: number;
  children?: React.ReactNode;
}

export const Textarea = ({
  label = '',
  placeholder = '',
  value: propValue,
  onChange = () => null,
  warning = '',
  error = '',
  success = '',
  labelStyle = {},
  disabled = false,
  className = '',
  name,
  textAreaClassName = '',
  description = '',
  maxLength = 250,
  required = false,
  showCount = false,
  children,
}: TextAreaProp) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [value, setValue] = useState(propValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          className="text-sm font-semibold text-gray-700 pb-1 flex gap-1 items-center"
          style={labelStyle}
        >
          {label}
          <span className="text-[#8B5CF6]">{required ? '*' : ''}</span>
        </label>
      )}

      <div
        className={`flex relative w-full px-3 py-2 bg-white border rounded-[10px] ${
          inputFocused ? 'shadow-focusEffect' : 'shadow-sm'
        }
          ${
            error ? 'border-red-500' : 'border-[#E4E7EC] hover:border-[#CED2DA]'
          } 
          ${disabled ? 'bg-gray-100' : ''}`}
      >
        <textarea
          name={name}
          placeholder={placeholder}
          ref={textAreaRef}
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          disabled={disabled}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className={`${textAreaClassName} flex-1 outline-none text-base bg-transparent placeholder-gray-400 resize-none h-[136px] ${
            disabled ? 'text-gray-500' : 'text-gray-900'
          }`}
        />

        {error && <RiErrorWarningLine className="text-red-500 w-4 h-4 ml-2" />}

        {description && !error && !success && !warning && (
          <div className="relative flex items-center ml-2">
            <FiHelpCircle className="text-gray-400 cursor-pointer w-4 h-4" />
            <div className="absolute hidden bg-black text-white text-xs font-semibold rounded-md p-2 bottom-7 right-0 group-hover:block">
              {description}
              <div className="absolute w-3 h-3 bg-black transform rotate-45 bottom-[-6px] right-3"></div>
            </div>
          </div>
        )}

        {children}
        {showCount && (
          <div className="text-text-secondary text-xs absolute right-1 bottom-1">
            {`${value?.length || 0} of ${maxLength}`}
          </div>
        )}
      </div>

      {/* Error/Warning/Success Messages */}
      {error && <div className="text-xs text-red-500 pt-1">{error}</div>}
      {warning && <div className="text-xs text-yellow-500 pt-1">{warning}</div>}
      {success && <div className="text-xs text-green-500 pt-1">{success}</div>}
    </div>
  );
};
