export type InputProps<InputType extends React.ElementType = "input"> =
  React.ComponentPropsWithoutRef<InputType>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`bg-color-3 rounded-lg border border-[#5D5D64] p-4 text-white ${className}`}
    />
  );
};
