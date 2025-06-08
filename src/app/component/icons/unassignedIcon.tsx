import { FC } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Unassigned: FC<IconProps> = ({ width, height, color, ...props }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6654 7.00016C13.6654 10.6821 10.6806 13.6668 6.9987 13.6668C3.3168 13.6668 0.332031 10.6821 0.332031 7.00016C0.332031 3.31826 3.3168 0.333496 6.9987 0.333496C10.6806 0.333496 13.6654 3.31826 13.6654 7.00016ZM4.33203 6.50016C4.05589 6.50016 3.83203 6.72402 3.83203 7.00016C3.83203 7.27631 4.05589 7.50016 4.33203 7.50016H9.66537C9.94151 7.50016 10.1654 7.27631 10.1654 7.00016C10.1654 6.72402 9.94151 6.50016 9.66537 6.50016H4.33203Z"
        fill="#8B5CF6"
      />
    </svg>
  );
};

export default Unassigned;
