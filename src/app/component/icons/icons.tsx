import { SVGProps } from "react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  reneganShield: (props: IconProps) => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_180_13012)">
        <path d="M55.5 0.5H0.5V55.5H55.5V0.5Z" fill="#231F20" />
        <path
          d="M43.3889 40.5688L42.7766 41.1812L37.3752 46.5858C30.1497 43.0149 25.8183 33.9202 24.7451 31.4387H12.6113L18.8055 25.2413H31.6966C33.1745 25.2413 34.5918 24.6542 35.6368 23.6092C36.6818 22.5642 37.2688 21.1469 37.2688 19.6691C37.2688 18.1912 36.6818 16.7739 35.6368 15.7289C34.5918 14.684 33.1745 14.0969 31.6966 14.0969H12.6113L18.8087 7.91237H31.7611C34.7476 7.94618 37.6095 9.1141 39.7669 11.1795C41.9243 13.2448 43.2158 16.0531 43.3797 19.0352C43.5436 22.0174 42.5677 24.9503 40.6497 27.2397C38.7316 29.5291 36.015 31.0036 33.0502 31.3646C35.2707 35.306 39.1735 40.5688 43.3889 40.5688Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_180_13012">
          <rect
            width="55"
            height="55"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),

  mark: (props: IconProps) => (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_180_12913)">
        <path
          d="M13 33C13 21.9543 21.9543 13 33 13C44.0457 13 53 21.9543 53 33C53 44.0457 44.0457 53 33 53C21.9543 53 13 44.0457 13 33Z"
          fill="#10B978"
          shapeRendering="crispEdges"
        />
        <path
          d="M33 8C19.1929 8 8 19.1929 8 33C8 46.8071 19.1929 58 33 58C46.8071 58 58 46.8071 58 33C58 19.1929 46.8071 8 33 8Z"
          stroke="#10B978"
          strokeOpacity="0.14"
          strokeWidth="10"
          shapeRendering="crispEdges"
        />
        <path
          d="M26.5834 33.9166L30.25 37.5833L39.4167 28.4166"
          stroke="#ECFDF5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_180_12913"
          x="0"
          y="0"
          width="66"
          height="66"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_180_12913"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.819608 0 0 0 0 0.980392 0 0 0 0 0.898039 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_180_12913"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_180_12913"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_180_12913"
            result="effect2_dropShadow_180_12913"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_180_12913"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),

  logo: (props: SVGProps<SVGSVGElement>) => {
    const { width = "124", height = "30", ...rest } = props;
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 99 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g clipPath="url(#clip0_2369_66669)">
          <path d="M24 0H0V24H24V0Z" fill="#F5F3FF" />
          <path
            d="M18.7152 17.4845L18.448 17.7517L16.091 20.11C12.9381 18.5518 11.048 14.5833 10.5797 13.5004H5.28496L7.98788 10.7961H13.6131C14.258 10.7961 14.8764 10.5399 15.3324 10.0839C15.7884 9.62791 16.0446 9.00945 16.0446 8.36458C16.0446 7.7197 15.7884 7.10124 15.3324 6.64524C14.8764 6.18925 14.258 5.93307 13.6131 5.93307H5.28496L7.98929 3.23438H13.6412C14.9444 3.24913 16.1932 3.75877 17.1347 4.66001C18.0761 5.56125 18.6396 6.78669 18.7112 8.08799C18.7827 9.38929 18.3568 10.6691 17.5199 11.6681C16.6829 12.6671 15.4975 13.3106 14.2037 13.4681C15.1727 15.188 16.8757 17.4845 18.7152 17.4845Z"
            fill="#121212"
          />
          <path
            d="M29.0318 17.9766V4.11328H33.8133C37.4697 4.11328 38.4949 5.39864 38.4949 8.27172C38.4949 10.2602 37.7509 11.5667 36.0437 12.0083L39.3386 17.9766H36.1238L33.3914 12.5511H31.9232V17.9766H29.0318ZM31.9232 10.2659H33.4701C35.1985 10.2659 35.5599 9.72444 35.5599 8.31813C35.5599 6.91183 35.1774 6.40837 33.7317 6.40837H31.9232V10.2659Z"
            fill="#F5F3FF"
          />
          <path
            d="M43.9795 7.31299C46.9525 7.31299 48.2589 8.80086 48.2589 11.9749C48.2589 12.4362 48.2589 12.8988 48.2181 13.3812H42.2118C42.2315 15.3303 42.6126 15.9927 44.4619 15.9927C45.4871 15.9717 46.5033 15.7953 47.4756 15.4696L48.0775 17.4989C47.214 17.8603 45.7669 18.2217 44.0794 18.2217C40.4033 18.2217 39.3584 16.5749 39.3584 12.837C39.3584 9.28181 40.745 7.31299 43.9795 7.31299ZM42.2118 11.5474H45.5869C45.5869 10.0004 45.2255 9.37744 43.9598 9.37744C42.6942 9.37744 42.2512 9.98497 42.2118 11.5474Z"
            fill="#F5F3FF"
          />
          <path
            d="M49.502 17.977V7.57034H52.0938L52.1135 8.53507C53.299 7.73488 54.4662 7.31299 55.5111 7.31299C57.0988 7.31299 58.4446 8.17787 58.4446 10.4884V17.9826H55.6123V11.0045C55.6123 10.0004 55.0695 9.69808 54.4465 9.69808C53.7237 9.69808 53.081 10.0004 52.3371 10.3815V17.9756L49.502 17.977Z"
            fill="#F5F3FF"
          />
          <path
            d="M64.2513 7.31299C67.2242 7.31299 68.5307 8.80086 68.5307 11.9749C68.5307 12.4362 68.5307 12.8988 68.4899 13.3812H62.4821C62.5032 15.3303 62.8844 15.9927 64.7322 15.9927C65.758 15.9718 66.7746 15.7955 67.7474 15.4696L68.3464 17.4946C67.483 17.8561 66.0359 18.2175 64.3483 18.2175C60.6722 18.2175 59.6273 16.5707 59.6273 12.8327C59.6273 9.28182 61.0168 7.31299 64.2513 7.31299ZM62.4821 11.5474H65.8573C65.8573 10.0004 65.4945 9.37744 64.2288 9.37744C62.9631 9.37744 62.5229 9.98497 62.4821 11.5474Z"
            fill="#F5F3FF"
          />
          <path
            d="M71.3236 17.7193C71.0048 17.6352 70.723 17.4473 70.5228 17.1853C70.3226 16.9232 70.2155 16.6019 70.2183 16.2722C70.2183 15.3679 70.9608 14.6043 71.4431 14.143C69.937 13.6199 69.3337 12.4949 69.3337 11.0492C69.3309 8.77377 70.6401 7.31262 73.7143 7.31262C74.3742 7.30849 75.0306 7.40863 75.6593 7.60935L79.1188 7.45325V9.45724L77.0656 9.21676C77.3798 9.4085 77.6403 9.67675 77.8228 9.99645C78.0053 10.3162 78.1037 10.6769 78.109 11.045C78.109 13.0138 76.9038 14.4595 73.7298 14.4595C73.4879 14.4595 73.2474 14.4595 73.0267 14.4398C72.8793 14.7193 72.7967 15.0283 72.7848 15.344C72.7848 15.645 72.9254 15.8461 73.3684 15.8672L75.4975 15.9262C77.5873 15.967 79.0541 16.77 79.0541 18.8795C79.0541 21.2111 77.2259 22.436 73.4289 22.436C70.1944 22.436 68.8879 21.4924 68.8879 19.885C68.909 18.5982 69.8161 17.9766 71.3236 17.7193ZM74.9997 18.3817L72.3882 18.3015C71.9452 18.5026 71.685 18.8246 71.685 19.3661C71.685 20.1705 72.308 20.5122 73.8142 20.5122C75.603 20.5122 76.406 20.0903 76.406 19.3267C76.406 18.7192 76.105 18.3985 74.9997 18.3774V18.3817ZM73.734 9.16051C72.4487 9.16051 72.0858 9.84257 72.0858 10.9085C72.0858 11.9534 72.4487 12.6355 73.734 12.6355C75.0194 12.6355 75.378 11.9534 75.4019 10.9043C75.378 9.84397 74.9392 9.15629 73.734 9.15629V9.16051Z"
            fill="#F5F3FF"
          />
          <path
            d="M79.5195 15.0224C79.5195 13.0338 80.5039 11.989 82.4137 11.7682C83.2167 11.6683 84.2616 11.6275 85.1658 11.6078V10.8836C85.1658 9.83871 84.6835 9.49839 83.5584 9.49839C82.3926 9.49839 81.2071 9.77965 80.525 9.93997L80.1228 7.87551C81.4093 7.50452 82.7413 7.31518 84.0802 7.31299C86.5525 7.31299 87.9391 8.17787 87.9391 10.5081V17.9826H85.4879L85.4668 17.1388C84.6498 17.827 83.6183 18.2085 82.5501 18.2175C80.5447 18.2175 79.5195 17.1121 79.5195 15.0224ZM83.377 16.1474C84.0135 16.1266 84.6321 15.9321 85.1658 15.5849V13.4164L83.6386 13.4557C82.6739 13.4754 82.2731 13.9381 82.2731 14.9225C82.2689 15.8464 82.6907 16.1488 83.377 16.1488V16.1474Z"
            fill="#F5F3FF"
          />
          <path
            d="M89.5451 17.977V7.57034H92.1369L92.158 8.53507C93.3421 7.73488 94.5038 7.31299 95.5529 7.31299C97.1406 7.31299 98.4864 8.17787 98.4864 10.4884V17.9826H95.6527V11.0045C95.6527 10.0004 95.1113 9.69808 94.4883 9.69808C93.7654 9.69808 93.1214 10.0004 92.3788 10.3815V17.9756L89.5451 17.977Z"
            fill="#F5F3FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_2369_66669">
            <rect width="98.4863" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },

  reneganLogo: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_2138_210619)">
          <path d="M55.5 0.5H0.5V55.5H55.5V0.5Z" fill="#F5F3FF" />
          <path
            d="M43.3888 40.5688L42.7765 41.1811L37.3751 46.5857C30.1496 43.0149 25.8182 33.9202 24.745 31.4387H12.6113L18.8055 25.2413H31.6966C33.1744 25.2413 34.5917 24.6542 35.6367 23.6092C36.6817 22.5642 37.2688 21.1469 37.2688 19.6691C37.2688 18.1912 36.6817 16.7739 35.6367 15.7289C34.5917 14.6839 33.1744 14.0969 31.6966 14.0969H12.6113L18.8087 7.91235H31.761C34.7475 7.94616 37.6094 9.11408 39.7668 11.1794C41.9242 13.2448 43.2157 16.0531 43.3797 19.0352C43.5436 22.0174 42.5676 24.9503 40.6496 27.2397C38.7316 29.529 36.0149 31.0036 33.0502 31.3645C35.2706 35.306 39.1734 40.5688 43.3888 40.5688Z"
            fill="#121212"
          />
        </g>
        <defs>
          <clipPath id="clip0_2138_210619">
            <rect
              width="55"
              height="55"
              fill="white"
              transform="translate(0.5 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  },
  envelopeIcon: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#filter0_dd_2625_78062)">
          <path
            d="M3 15C3 8.37258 8.37258 3 15 3H31C37.6274 3 43 8.37258 43 15V31C43 37.6274 37.6274 43 31 43H15C8.37258 43 3 37.6274 3 31V15Z"
            fill="url(#paint0_linear_2625_78062)"
          />
          <path
            d="M14.75 19.3335L22.5528 23.2349C22.8343 23.3757 23.1657 23.3757 23.4472 23.2349L31.25 19.3335M14.75 18.4168V27.5835C14.75 28.596 15.4887 29.4168 16.4 29.4168H29.6C30.5113 29.4168 31.25 28.596 31.25 27.5835V18.4168C31.25 17.4043 30.5113 16.5835 29.6 16.5835H16.4C15.4887 16.5835 14.75 17.4043 14.75 18.4168Z"
            stroke="#F9FAFB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_2625_78062"
            x="0"
            y="0"
            width="46"
            height="46"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_2625_78062"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2625_78062"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="dilate"
              in="SourceAlpha"
              result="effect2_dropShadow_2625_78062"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_2625_78062"
              result="effect2_dropShadow_2625_78062"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2625_78062"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2625_78062"
            x1="23"
            y1="3"
            x2="23"
            y2="43"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F1F1F" />
            <stop offset="1" stopColor="#2E2E2E" />
          </linearGradient>
        </defs>
      </svg>
    );
  },

  checkApprovedIcon: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#filter0_dd_2636_78035)">
          <path
            d="M3 15C3 8.37258 8.37258 3 15 3H31C37.6274 3 43 8.37258 43 15V31C43 37.6274 37.6274 43 31 43H15C8.37258 43 3 37.6274 3 31V15Z"
            fill="url(#paint0_linear_2636_78035)"
          />
          <path
            d="M19.3333 23.0002L22.0833 25.7502L26.6666 21.1668M32.1666 23.0002C32.1666 28.0628 28.0625 32.1668 22.9999 32.1668C21.3303 32.1668 19.7649 31.7204 18.4166 30.9405L14.2916 31.7085L15.0596 27.5835C14.2796 26.2352 13.8333 24.6698 13.8333 23.0002C13.8333 17.9376 17.9373 13.8335 22.9999 13.8335C28.0625 13.8335 32.1666 17.9376 32.1666 23.0002Z"
            stroke="#F9FAFB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_2636_78035"
            x="0"
            y="0"
            width="46"
            height="46"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_2636_78035"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2636_78035"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="dilate"
              in="SourceAlpha"
              result="effect2_dropShadow_2636_78035"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_2636_78035"
              result="effect2_dropShadow_2636_78035"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2636_78035"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2636_78035"
            x1="23"
            y1="3"
            x2="23"
            y2="43"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F1F1F" />
            <stop offset="1" stopColor="#2E2E2E" />
          </linearGradient>
        </defs>
      </svg>
    );
  },

  communityIcon: (props: IconProps) => (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_2821_10962)">
        <path
          d="M3 19C3 10.1634 10.1634 3 19 3H35C43.8366 3 51 10.1634 51 19V35C51 43.8366 43.8366 51 35 51H19C10.1634 51 3 43.8366 3 35V19Z"
          fill="url(#paint0_linear_2821_10962)"
        />
        <path
          d="M20 31V30C20 27.2386 22.2386 25 25 25M30 31V30C30 27.2386 27.7614 25 25 25M25 25C26.6569 25 28 23.6569 28 22C28 20.3431 26.6569 19 25 19C23.3431 19 22 20.3431 22 22C22 23.6569 23.3431 25 25 25ZM14 31V30C14 28.3431 15.3431 27 17 27M17 27C18.1046 27 19 26.1046 19 25C19 23.8954 18.1046 23 17 23C15.8954 23 15 23.8954 15 25C15 26.1046 15.8954 27 17 27ZM36 31V30C36 28.3431 34.6569 27 33 27M33 27C34.1046 27 35 26.1046 35 25C35 23.8954 34.1046 23 33 23C31.8954 23 31 23.8954 31 25C31 26.1046 31.8954 27 33 27Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_2821_10962"
          x="0"
          y="0"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_2821_10962"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2821_10962"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_2821_10962"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2821_10962"
            result="effect2_dropShadow_2821_10962"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2821_10962"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2821_10962"
          x1="27"
          y1="3"
          x2="27"
          y2="51"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F1F1F" />
          <stop offset="1" stopColor="#2E2E2E" />
        </linearGradient>
      </defs>
    </svg>
  ),

  moreIcon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  ),

  SendIcon: (props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        {...props}
      >
        <path
          d="M18.4617 2.96094L9.31565 17.5036L7.92367 10.3398L1.66797 6.58155L18.4617 2.96094ZM18.4617 2.96094L7.881 10.3696"
          stroke="#344051"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  homeIcon: (props: IconProps) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M15 17H9M7 21H17C19.2091 21 21 19.2091 21 17V10.7076C21 9.30884 20.2694 8.01172 19.0732 7.28676L14.0732 4.25645C12.7989 3.48418 11.2011 3.48418 9.92679 4.25646L4.92679 7.28676C3.73061 8.01172 3 9.30883 3 10.7076V17C3 19.2091 4.79086 21 7 21Z"
          stroke="#CED2DA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  AttachmentIcon: (props: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
      >
        <g clipPath="url(#clip0_1353_46451)">
          <path
            d="M14.2929 7.77449L8.16621 13.9012C7.41565 14.6517 6.39767 15.0734 5.33621 15.0734C4.27475 15.0734 3.25677 14.6517 2.50621 13.9012C1.75565 13.1506 1.33398 12.1326 1.33398 11.0712C1.33398 10.0097 1.75565 8.99172 2.50621 8.24116L8.63288 2.11449C9.13325 1.61412 9.81191 1.33301 10.5195 1.33301C11.2272 1.33301 11.9058 1.61412 12.4062 2.11449C12.9066 2.61487 13.1877 3.29352 13.1877 4.00116C13.1877 4.70879 12.9066 5.38745 12.4062 5.88782L6.27288 12.0145C6.02269 12.2647 5.68336 12.4052 5.32954 12.4052C4.97572 12.4052 4.6364 12.2647 4.38621 12.0145C4.13602 11.7643 3.99547 11.425 3.99547 11.0712C3.99547 10.7173 4.13602 10.378 4.38621 10.1278L10.0462 4.47449"
            stroke="#344051"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1353_46451">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },

  thrash: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3194_4298)">
        <path
          d="M16.6667 7.49593L15.0042 16.9512C14.8641 17.7481 14.1718 18.3293 13.3627 18.3293H6.63728C5.82816 18.3293 5.13592 17.7481 4.9958 16.9512L3.33333 7.49593M17.5 4.99593H12.8125M12.8125 4.99593V3.32926C12.8125 2.40879 12.0663 1.6626 11.1458 1.6626H8.85417C7.93369 1.6626 7.1875 2.40879 7.1875 3.32926V4.99593M12.8125 4.99593H7.1875M2.5 4.99593H7.1875"
          stroke="#FF4D4D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3194_4298">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 -0.00390625)"
          />
        </clipPath>
      </defs>
    </svg>
  ),

  deactivate: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.83333 5.82943L14.1667 5.82943M5.83333 9.99609L14.1667 9.99609M5.83333 14.1628L10.8333 14.1628M4.16667 2.49609H15.8333C16.7538 2.49609 17.5 3.24229 17.5 4.16276V15.8294C17.5 16.7499 16.7538 17.4961 15.8333 17.4961H4.16667C3.24619 17.4961 2.5 16.7499 2.5 15.8294V4.16276C2.5 3.24229 3.24619 2.49609 4.16667 2.49609Z"
        stroke="#CED2DA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevronRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),

  UnassigedIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6654 7.00016C13.6654 10.6821 10.6806 13.6668 6.9987 13.6668C3.3168 13.6668 0.332031 10.6821 0.332031 7.00016C0.332031 3.31826 3.3168 0.333496 6.9987 0.333496C10.6806 0.333496 13.6654 3.31826 13.6654 7.00016ZM4.33203 6.50016C4.05589 6.50016 3.83203 6.72402 3.83203 7.00016C3.83203 7.27631 4.05589 7.50016 4.33203 7.50016H9.66537C9.94151 7.50016 10.1654 7.27631 10.1654 7.00016C10.1654 6.72402 9.94151 6.50016 9.66537 6.50016H4.33203Z"
        fill="#8B5CF6"
      />
    </svg>
  ),

  DiagonalArrowIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.33203 8.99984L8.66537 1.6665M8.66537 1.6665V8.7065M8.66537 1.6665H1.62536"
        stroke="#F2F4F7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  dueIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.66683 9.33366H1.3335M5.3335 6.66699H1.3335M4.00016 4.00033H1.3335M8.00016 12.0003H1.3335M12.6668 13.3337V2.66699M12.6668 13.3337L14.6668 11.3337M12.6668 13.3337L10.6668 11.3337M12.6668 2.66699L14.6668 4.66699M12.6668 2.66699L10.6668 4.66699"
        stroke="#F2F4F7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ArrorLeft: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.4167 10H5M5 10L10 5M5 10L10 15"
        stroke="#F2F4F7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  UndoIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="25"
      height="26"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.24992 6.66667H12.9999C12.9999 6.66667 12.9999 6.66667 12.9999 6.66667C12.9999 6.66667 17.1666 6.66667 17.1666 10.5882C17.1666 15 12.9999 15 12.9999 15H5.73801M6.74992 9.58333L3.83325 6.66667L6.74992 3.75"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ProfileIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_4119_6717)">
        <path
          d="M3 11C3 6.58172 6.58172 3 11 3H27C31.4183 3 35 6.58172 35 11V27C35 31.4183 31.4183 35 27 35H11C6.58172 35 3 31.4183 3 27V11Z"
          fill="url(#paint0_linear_4119_6717)"
        />
        <g clipPath="url(#clip0_4119_6717)">
          <path
            d="M13.2032 23.7593C13.2032 23.7593 14.875 21.625 19 21.625C23.125 21.625 24.7968 23.7593 24.7968 23.7593M11.5 19C11.5 14.8579 14.8579 11.5 19 11.5C23.1421 11.5 26.5 14.8579 26.5 19C26.5 23.1421 23.1421 26.5 19 26.5C14.8579 26.5 11.5 23.1421 11.5 19ZM21.25 16.75C21.25 17.9926 20.2426 19 19 19C17.7574 19 16.75 17.9926 16.75 16.75C16.75 15.5074 17.7574 14.5 19 14.5C20.2426 14.5 21.25 15.5074 21.25 16.75Z"
            stroke="#F9FAFB"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_4119_6717"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_4119_6717"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4119_6717"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_4119_6717"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_4119_6717"
            result="effect2_dropShadow_4119_6717"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_4119_6717"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4119_6717"
          x1="19"
          y1="3"
          x2="19"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F1F1F" />
          <stop offset="1" stopColor="#2E2E2E" />
        </linearGradient>
        <clipPath id="clip0_4119_6717">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  AmlShieldIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_4119_56747)">
        <path
          d="M3 11C3 6.58172 6.58172 3 11 3H27C31.4183 3 35 6.58172 35 11V27C35 31.4183 31.4183 35 27 35H11C6.58172 35 3 31.4183 3 27V11Z"
          fill="url(#paint0_linear_4119_56747)"
        />
        <path
          d="M16.3752 18.6255L18.6252 20.8755L22.3752 17.1255M12.3479 13.6849L13.7502 23.5005C13.8032 23.8717 14.1252 26.1255 19.0002 26.1255C23.8752 26.1255 24.1971 23.8717 24.2502 23.5005L25.6524 13.6849C25.7078 13.2969 25.4547 12.9349 25.0722 12.8499L19.3256 11.5728C19.1112 11.5252 18.8891 11.5252 18.6748 11.5728L12.9281 12.8499C12.5456 12.9349 12.2925 13.2969 12.3479 13.6849Z"
          stroke="#F9FAFB"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_4119_56747"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_4119_56747"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4119_56747"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_4119_56747"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_4119_56747"
            result="effect2_dropShadow_4119_56747"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_4119_56747"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4119_56747"
          x1="19"
          y1="3"
          x2="19"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F1F1F" />
          <stop offset="1" stopColor="#2E2E2E" />
        </linearGradient>
      </defs>
    </svg>
  ),
  LockIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_4164_62717)">
        <path
          d="M3 11C3 6.58172 6.58172 3 11 3H27C31.4183 3 35 6.58172 35 11V27C35 31.4183 31.4183 35 27 35H11C6.58172 35 3 31.4183 3 27V11Z"
          fill="url(#paint0_linear_4164_62717)"
        />
        <path
          d="M22 19H22.9C23.2314 19 23.5 19.2686 23.5 19.6V24.4C23.5 24.7314 23.2314 25 22.9 25H15.1C14.7686 25 14.5 24.7314 14.5 24.4V19.6C14.5 19.2686 14.7686 19 15.1 19H16M22 19V16C22 15 21.4 13 19 13C16.6 13 16 15 16 16V19M22 19H16"
          stroke="#F9FAFB"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_4164_62717"
          x="0"
          y="0"
          width="38"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_4164_62717"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4164_62717"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_4164_62717"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_4164_62717"
            result="effect2_dropShadow_4164_62717"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_4164_62717"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4164_62717"
          x1="19"
          y1="3"
          x2="19"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F1F1F" />
          <stop offset="1" stopColor="#2E2E2E" />
        </linearGradient>
      </defs>
    </svg>
  ),
  ViewDot: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6666 7.99967C10.6666 9.47243 9.47274 10.6663 7.99998 10.6663C6.52722 10.6663 5.33331 9.47243 5.33331 7.99967C5.33331 6.52692 6.52722 5.33301 7.99998 5.33301C9.47274 5.33301 10.6666 6.52692 10.6666 7.99967Z"
        fill="#737373"
      />
    </svg>
  ),
  Download: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.33366 13.3346L10.667 13.3346M8.00033 2.66797V10.668M8.00033 10.668L11.3337 7.33464M8.00033 10.668L4.66699 7.33464"
        stroke="#F2F4F7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
