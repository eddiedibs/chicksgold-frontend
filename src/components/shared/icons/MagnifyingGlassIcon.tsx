
const MagnifyingGlassIcon = ({ width = "24", height = "24", color = "currentColor", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z"
        fill={color}
      />
    </svg>
  );
};

export default MagnifyingGlassIcon;