type Props = {
  name: string;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  name,
  bgColor,
  color,
  onClick,
  disabled,
  className,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`py-3 px-6 text-[24px] bg-buttonBg text-buttonTextColor disabled:cursor-not-allowed cursor-pointer  ${className} `}
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      {name}
    </button>
  );
};

export default Button;
