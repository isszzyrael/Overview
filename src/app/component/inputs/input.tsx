'use client';

import React, {
  useState,
  useRef,
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
} from 'react';
import { FiMail, FiHelpCircle } from 'react-icons/fi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { beautifyCardNumber } from '@/app/utils/beautifyCardNumber';
import { TbEyeClosed } from 'react-icons/tb';
import { TfiEye } from 'react-icons/tfi';
import classNames from 'classnames';

interface InputProp {
  name?: string;
  label?: string;
  type?: HTMLInputTypeAttribute | 'card';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => any;
  warning?: string;
  error?: string | ReactNode;
  success?: string;
  labelStyle?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  description?: string;
  maxLength?: number;
  autoComplete?: boolean;
  required?: boolean;
  children?: React.ReactNode;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Input = ({
  label = '',
  type = 'text',
  placeholder = '',
  value,
  onChange = () => null,
  warning = '',
  error = '',
  success = '',
  labelStyle = {},
  disabled = false,
  className = '',
  name,
  inputClassName = '',
  description = '',
  autoComplete = true,
  required = false,
  children,
  wrapperClassName,
  onKeyDown,
  maxLength,
}: InputProp) => {
  const [hidePassword, setHidePassword] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = useState(false);

  const togglePassword = () => {
    setHidePassword(!hidePassword);
    inputRef?.current?.focus();
  };

  const { addSpacingToCardNumber, removeSpacingFromCardNumber } =
    beautifyCardNumber;

  const handleChange = (val: string) => {
    if (type === 'card') {
      const cleanedUpValue = removeSpacingFromCardNumber(val);

      if (cleanedUpValue.length > 16) return;

      const numberValue = cleanedUpValue.replace(/[^0-9]/g, '');
      onChange(numberValue);
    } else {
      onChange(val);
    }
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
        className={classNames(
          wrapperClassName,
          `flex items-center w-full px-3 py-2 bg-white border rounded-[10px] ${
            inputFocused ? 'shadow-focusEffect' : 'shadow-sm'
          }
          ${
            error ? 'border-red-500' : 'border-[#E4E7EC] hover:border-[#CED2DA]'
          } 
          ${disabled ? 'bg-gray-100' : ''}`,
        )}
      >
        {type === 'email' && <FiMail className="text-gray-500 w-5 h-5 mr-2" />}

        {type === 'card' && (
          <div className="relative w-8 h-6 bg-white border border-gray-300 rounded-md mr-2">
            <div className="absolute w-[13px] h-[13px] bg-red-500 rounded-full top-[5px] left-[5px]" />
            <div className="absolute w-[13px] h-[13px] bg-yellow-500 rounded-full top-[5px] right-[5px] opacity-90" />
          </div>
        )}

        <input
          name={name}
          type={type === 'password' ? (hidePassword ? type : 'text') : type}
          placeholder={placeholder}
          ref={inputRef}
          value={type === 'card' ? addSpacingToCardNumber(value || '') : value}
          onChange={(event) => handleChange(event.target.value)}
          disabled={disabled}
          autoComplete={autoComplete ? 'on' : 'off'}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          className={classNames(
            inputClassName,
            `flex-1 outline-none text-base bg-transparent placeholder-gray-400 ${
              disabled ? 'text-gray-500' : 'text-gray-900'
            }`,
          )}
        />

        {type === 'password' &&
          (hidePassword ? (
            <TbEyeClosed
              className="text-gray-400 cursor-pointer w-5 h-5"
              onClick={togglePassword}
            />
          ) : (
            <TfiEye
              className="text-gray-400 cursor-pointer w-5 h-5"
              onClick={togglePassword}
            />
          ))}

        {error && <RiErrorWarningLine className="text-red-500 w-4 h-4 ml-2" />}

        {description &&
          !error &&
          !success &&
          type !== 'password' &&
          !warning && (
            <div className="relative flex items-center ml-2">
              <FiHelpCircle className="text-gray-400 cursor-pointer w-4 h-4" />
              <div className="absolute hidden bg-black text-white text-xs font-semibold rounded-md p-2 bottom-7 right-0 group-hover:block">
                {description}
                <div className="absolute w-3 h-3 bg-black transform rotate-45 bottom-[-6px] right-3"></div>
              </div>
            </div>
          )}

        {children}
      </div>

      {/* Error/Warning/Success Messages */}
      {error && <div className="text-xs text-red-500 pt-1">{error}</div>}
      {warning && <div className="text-xs text-yellow-500 pt-1">{warning}</div>}
      {success && <div className="text-xs text-green-500 pt-1">{success}</div>}
    </div>
  );
};
