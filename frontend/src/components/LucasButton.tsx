export type ButtonProps<ButtonType extends React.ElementType = "button"> =
  React.ComponentPropsWithoutRef<ButtonType> & CustomButtonProps;

type CustomButtonProps = {
  loading?: boolean;
};

export const LucasButton: React.FC<ButtonProps> = ({
  className,
  loading = false,
  children,
  ...props
}) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};
