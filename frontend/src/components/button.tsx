export type ButtonProps<ButtonType extends React.ElementType = "button"> =
  React.ComponentPropsWithoutRef<ButtonType>;


export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button {...props} className={`bg-color-1 rounded-lg px-4 py-4 text-white hover:opacity-80 ${className}`}>
      {children}
    </button>
  );
};
