import React from 'react';

export type ButtonProps<ButtonType extends React.ElementType = "button"> =
  React.ComponentPropsWithoutRef<ButtonType>;

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`bg-color-1 rounded-lg px-4 py-4 text-white hover:bg-[#76487E] ${disabled ? 'bg-gray-500 opacity-100 cursor-not-allowed hover:bg-gray-500' : ''} ${className}`}
    >
      {children}
    </button>
  );
};
