import React, {
  useState,
  useRef,
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { IoSearchOutline } from "react-icons/io5";
import { debounce } from "lodash";
import { MdOutlineCancel } from "react-icons/md";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  handleChange: (value: string) => void;
  value?: string;
  handleChangeDependency?: any;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  handleChange,
  value,
  className,
  handleChangeDependency,
  ...props
}) => {
  const SearchRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const onChange = useCallback(
    debounce((value: string) => {
      handleChange(value);
    }, 1000),
    [handleChangeDependency]
  );

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    onChange(value);
  };

  useEffect(() => {
    if (value || value == "") {
      setSearchValue(value);
    }
  }, [value]);

  return (
    <div
      className={`flex py-2 px-2.5 gap-2 rounded-[10px] border border-solid border-[#E4E7EC] shadow-sm min-w-[300px] ${className}`}
      ref={SearchRef}
      {...props}
    >
      <IoSearchOutline size={24} color="#637083" />

      <input
        className='flex flex-1 text-text-tertiary text-base font-inter focus:outline-none'
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleInputChange(e.target.value);
        }}
      />

      {searchValue.length > 0 && (
        <button
          onClick={() => {
            handleInputChange("");
          }}
        >
          <MdOutlineCancel size={16} color="#637083" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
