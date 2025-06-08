import { FC } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const CorrectIcon: FC<IconProps> = ({ width, height, color, ...props }) => {
  return (
    <svg
      width={width || "40"}
      height={height || "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        minWidth: width || "40",
        minHeight: height || "40",
      }}
      {...props}
    >
      <path
        d="M20.0026 3.33203C10.8193 3.33203 3.33594 10.8154 3.33594 19.9987C3.33594 29.182 10.8193 36.6654 20.0026 36.6654C29.1859 36.6654 36.6693 29.182 36.6693 19.9987C36.6693 10.8154 29.1859 3.33203 20.0026 3.33203ZM27.9693 16.1654L18.5193 25.6154C18.2859 25.8487 17.9693 25.982 17.6359 25.982C17.3026 25.982 16.9859 25.8487 16.7526 25.6154L12.0359 20.8987C11.5526 20.4154 11.5526 19.6154 12.0359 19.132C12.5193 18.6487 13.3193 18.6487 13.8026 19.132L17.6359 22.9654L26.2026 14.3987C26.6859 13.9154 27.4859 13.9154 27.9693 14.3987C28.4526 14.882 28.4526 15.6654 27.9693 16.1654Z"
        fill={color || "#02B237"}
      />
    </svg>
  );
};

export default CorrectIcon;
