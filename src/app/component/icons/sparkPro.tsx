import { FC } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const ProIcon: FC<IconProps> = ({ width, height, color, ...props }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        minWidth: width || "19",
        minHeight: height || "18",
      }}
      {...props}
    >
      <path
        d="M8.49992 1.3335C8.11016 4.84131 5.34106 7.61041 1.83325 8.00016C5.34106 8.38992 8.11016 11.159 8.49992 14.6668C8.88968 11.159 11.6588 8.38992 15.1666 8.00016C11.6588 7.61041 8.88968 4.84131 8.49992 1.3335Z"
        fill="#737373"
      />
    </svg>
  );
};

export default ProIcon;
