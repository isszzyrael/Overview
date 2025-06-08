import React, { useState, useRef, useEffect } from 'react';
import CheckBoxV2 from './checkBoxV2';
import { Button } from '@/app/component/Button';
import { Input } from '@/app/component/inputs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface SearchableMultiSelectDropdownProps {
  title: string;
  options: string[];
  onApply: (selectedItems: string[]) => void;
}

export const SearchableMultiSelectDropdown: React.FC<
  SearchableMultiSelectDropdownProps
> = ({ title, options, onApply }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleSelection = (option: string) => {
    setSelectedItems((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const handleApply = () => {
    onApply(selectedItems);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedItems([]);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        className="bg-white text-text-secondary border-border_color-200 text-sm "
        variant="outlined"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {selectedItems.length > 0 && `(${selectedItems.length})`}
        <span className="ml-2">
          {isOpen ? (
            <IoIosArrowUp size={20} color="#637083" />
          ) : (
            <IoIosArrowDown size={20} color="#637083" />
          )}
        </span>
      </Button>
      {isOpen && (
        <div className="absolute bg-white border rounded-lg shadow-lg w-64 p-2 top-[60px]">
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(val) => setSearchTerm(val)}
          />
          <div className="max-h-60 overflow-y-auto mt-2">
            {filteredOptions.map((option) => (
              <div
                key={option}
                className="flex items-center gap-2 py-1 cursor-pointer"
                onClick={() => toggleSelection(option)}
              >
                <CheckBoxV2
                  checkedBgColor="bg-[#000000]"
                  checked={selectedItems.includes(option)}
                  setChecked={(checked) => {
                    toggleSelection(option);
                  }}
                />
                <span>{option}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <Button
              className="border-0 text-text-secondary"
              variant="outlined"
              onClick={handleClear}
            >
              Clear
            </Button>
            <Button onClick={handleApply}>Apply</Button>
          </div>
        </div>
      )}
    </div>
  );
};
