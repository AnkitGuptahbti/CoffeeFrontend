
type SkeletonProps = {
  width?: string;
  height?: string;
  className?: string;
};

const SkeletonButton = ({
  width = "100px",
  height = "50px",
  className = "",
}: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 rounded-full ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default SkeletonButton;
