import React, { useState, useEffect } from 'react';

interface ChipInputProps {
  placeholder?: string;
  label?: string;
  required?: boolean;
  value?: string[];
  onChange?: (value: string[]) => void;
}

export const ChipInput: React.FC<ChipInputProps> = ({
  placeholder = 'Add new',
  label,
  required = false,
  value = [],
  onChange,
}) => {
  const [chips, setChips] = useState<string[]>(value);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setChips(value);
  }, [value]);

  const handleAddChip = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const newChips = [...chips, input.trim()];
      setChips(newChips);
      setInput('');
      onChange?.(newChips);
    }
  };

  const handleRemoveChip = (chipToRemove: string) => {
    const newChips = chips.filter((chip) => chip !== chipToRemove);
    setChips(newChips);
    onChange?.(newChips);
  };

  return (
    <div className={`flex flex-col`}>
      {label && (
        <label className="text-sm font-semibold text-gray-700 pb-1 flex gap-1 items-center">
          {label}
          <span className="text-[#8B5CF6]">{required ? '*' : ''}</span>
        </label>
      )}
      <div className="flex flex-wrap items-center gap-2 border rounded-xl py-2 px-3">
        {chips?.map((chip) => (
          <div
            key={chip}
            className="flex whitespace-nowrap items-center border border-border_color-200 text-text-primary text-xs rounded-full px-2 py-1"
          >
            {chip}
            <button
              onClick={() => handleRemoveChip(chip)}
              className="ml-2 text-text-primary text-[10px] rounded-full flex justify-center items-start bg-border_color-100 w-[14px] h-[14px]"
            >
              ✕
            </button>
          </div>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleAddChip}
          placeholder={placeholder}
          className="outline-none text-sm"
        />
      </div>
    </div>
  );
};