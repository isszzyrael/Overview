import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface SelectDropdownProps {
  data?: {
    label: string;
    children?: React.ReactNode;
    value: string;
  }[];
  label?: string;
  placeholder?: string;
  handleSelect?: (value: string) => void;
  required?: boolean;
  value?: string;
  className?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  data = [],
  placeholder = 'Select an option',
  label,
  handleSelect = () => {},
  required = false,
  value = '',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState<'down' | 'up'>('down');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggleDropdown = () => {
    if (!isOpen) {
      calculateDropdownDirection();
    }
    setIsOpen(!isOpen);
  };

  const calculateDropdownDirection = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;
      const dropdownHeight = 180; 

      setDropdownDirection(spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? 'up' : 'down');
    }
  };

  const handleItemClick = (selectedValue: string) => {
    handleSelect(selectedValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        calculateDropdownDirection();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const selectedLabel = value 
    ? data.find((item) => item.value === value)?.label 
    : null;

  return (
    <div
      ref={dropdownRef}
      className={`relative text-left w-full flex flex-col ${className}`}
    >
      {label && (
        <label className="text-sm font-semibold text-gray-700 pb-1 flex gap-1 items-center">
          {label}
          <span className="text-[#8B5CF6]">{required ? '*' : ''}</span>
        </label>
      )}

      <div>
        <button
          ref={buttonRef}
          type="button"
          onClick={handleToggleDropdown}
          className="inline-flex justify-between items-center w-full rounded-[10px] border border-gray-300 shadow-sm px-3 py-2 bg-white hover:bg-gray-50"
        >
          <span className={`text-sm font-medium ${selectedLabel ? 'text-text-secondary' : 'text-gray-400'}`}>
            {selectedLabel || placeholder}
          </span>
          <span className="ml-2">
            {isOpen ? (
              <IoIosArrowUp size={20} color="#637083" />
            ) : (
              <IoIosArrowDown size={20} color="#637083" />
            )}
          </span>
        </button>
      </div>

      {isOpen && data.length > 0 && (
        <div
          className={`absolute left-0 w-full max-h-[180px] overflow-y-auto py-2 rounded-xl z-20 shadow-lg bg-white border border-solid border-[#E4E7EC] ${
            dropdownDirection === 'down' 
              ? `${label ? 'top-[80px]' : 'top-[50px]'}` 
              : `${label ? 'bottom-[80px]' : 'bottom-[50px]'}`
          }`}
          role="menu"
        >
          {data.map((item, index) => (
            <div
              key={`${item.value}-${index}`}
              className={`flex w-full items-center justify-between gap-1.5 px-4 py-2 text-sm cursor-pointer ${
                value === item.value ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleItemClick(item.value)}
              role="menuitem"
            >
              <div className="flex-1 text-text-secondary text-sm">
                {item.label}
              </div>
              {item.children}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;