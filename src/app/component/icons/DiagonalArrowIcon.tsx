import { FC } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const DiagonalArrowIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <path
        d="M1.33203 9.00033L8.66537 1.66699M8.66537 1.66699V8.70699M8.66537 1.66699H1.62536"
        stroke="#344051"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
