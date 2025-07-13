type IconProps = React.SVGProps<SVGSVGElement> & {
  width: number;
  height: number;
};

const IconChevronDown = ({ width = 20, height = 20, ...rest }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <mask
      id="mask0_4_987"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <rect width={24} height={24} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_4_987)">
      <path
        d="M12 15.375L6 9.375L7.4 7.975L12 12.575L16.6 7.975L18 9.375L12 15.375Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
export default IconChevronDown;
