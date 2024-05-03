type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`card-base inline-block ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
