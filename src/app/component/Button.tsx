import { ImSpinner8 } from "react-icons/im";
import classNames from "classnames";

enum SIZE {
  large = "l",
  medium = "md",
  small = "sm",
  xtra_small = "xs",
}

enum VARIANT {
  solid = "solid",
  solidv2 = "solidv2",
  outlined = "outlined",
  greyOutlined = "grey-outlined",
  grayOutlined = "gray-outlined",
  errorSolid = "error-solid",
  errorOutlined = "error-outlined",
  destroy = "destroy",
  text = "text",
}

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "l" | "md" | "sm" | "xs";
  variant?:
    | "solid"
    | "solidv2"
    | "outlined"
    | "text"
    | "error-solid"
    | "error-outlined"
    | "grey-outlined"
    | "gray-outlined"
    | "destroy";
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
  loaderText?: string;
  title?: string;
  color?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  size = SIZE.medium,
  width,
  height,
  variant = VARIANT.solid,
  onClick,
  className,
  disabled = false,
  loading = false,
  error = false,
  errorMessage = "There was an error, please try again.",
  loaderText = "",
  title,
  color,
  type = "button",
  ...props
}: ButtonProps) {
  function getStyles() {
    const baseStyles =
      "flex items-center font-medium justify-center whitespace-nowrap rounded-[8px] transition-all duration-300 disabled:cursor-not-allowed cursor-pointer";
    const sizeStyles = {
      [SIZE.large]: "h-12 px-6 text-lg",
      [SIZE.medium]: "h-10 px-5 text-base",
      [SIZE.small]: "h-8 px-4 text-sm",
      [SIZE.xtra_small]: "h-6 px-3 text-xs",
    };
    const variantStyles = {
      [VARIANT.solid]: `bg-[#FFFFFF] text-[#121212] hover:bg-[#7C3AED] hover:text-[#FFFFFF] disabled:bg-[#E4E7EC] disabled:text-[#97A1AF]`,
      [VARIANT.solidv2]: `bg-[#3D3D3D] text-[#979DA5] hover:bg-[#7C3AED] hover:text-[#ffffff] disabled:bg-[#2E2E2E] disabled:text-[#97A1AF]`,
      [VARIANT.outlined]: `bg-transparent text-[#ffffff] border border-[#ffffff] hover:bg-[#ffffff1A] disabled:border-[#E4E7EC] disabled:text-[#97A1AF]`,
      [VARIANT.greyOutlined]: `bg-transparent text-[#344051] border border-[#2E2E2E] hover:bg-gray-10 disabled:border-[#E4E7EC] disabled:text-[#97A1AF]`,
      [VARIANT.grayOutlined]: `bg-transparent text-[#344051] border border-[#2E2E2E] hover:bg-gray-10 disabled:border-[#E4E7EC] disabled:text-[#97A1AF]`,
      [VARIANT.text]: `bg-transparent text-[#ffffff] hover:bg-[transparent] disabled:bg-[#E4E7EC] disabled:text-[#97A1AF]`,
      [VARIANT.errorSolid]: `bg-[#FF4C4C1A] text-[#FF4D4D] hover:bg-[#ffffff] disabled:bg-gray-200 disabled:text-gray-500`,
      [VARIANT.errorOutlined]: `bg-transparent text-[#FF4D4D] border border-[#FF4D4D] hover:bg-[#FF4D4D1A] disabled:border-[#E4E7EC] disabled:text-[#97A1AF]`,
      [VARIANT.destroy]: `bg-[#3D3D3D] text-[#FF4D4D] hover:bg-[#FF4D4D] hover:text-[#ffffff] disabled:border-[#E4E7EC] disabled:text-[#97A1AF]`,
    };

    return `${className || ""} ${baseStyles} ${sizeStyles[size]} ${
      variantStyles[variant]
    }`;
  }

  return (
    <>
      <button
        disabled={disabled || loading}
        onClick={disabled || loading ? undefined : onClick}
        className={classNames(getStyles())}
        style={{ width, height, backgroundColor: color }}
        title={title}
        type={type}
        {...props}
      >
        {!loading && children}

        {loading && (
          <div className="flex items-center space-x-2">
            {loaderText && <span className="text-gray-500">{loaderText}</span>}
            <ImSpinner8 className="animate-spin text-xl" />
          </div>
        )}
      </button>

      {error && <div className="text-red-600 text-sm mt-2">{errorMessage}</div>}
    </>
  );
}
