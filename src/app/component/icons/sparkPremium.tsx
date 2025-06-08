import { FC } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const PremiumIcon: FC<IconProps> = ({ width, height, color, ...props }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        minWidth: width || "19",
        minHeight: height || "18",
      }}
      {...props}
    >
      <path
        d="M9.5 1.5C9.06152 5.44629 5.94629 8.56152 2 9C5.94629 9.43848 9.06152 12.5537 9.5 16.5C9.93848 12.5537 13.0537 9.43848 17 9C13.0537 8.56152 9.93848 5.44629 9.5 1.5Z"
        fill="#8B5CF6"
      />
    </svg>
  );
};

export default PremiumIcon;
