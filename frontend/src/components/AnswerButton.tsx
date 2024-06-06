import React from 'react';

export type ButtonProps<ButtonType extends React.ElementType = "button"> =
  React.ComponentPropsWithoutRef<ButtonType> & {
    correct?: boolean;
    wrong?: boolean;
  }

export const AnswerButton: React.FC<ButtonProps> = ({
  className,
  children,
  correct,
  wrong,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-[#34343A] rounded-lg px-4 py-4 h-32 text-white text-xl border border-[#5D5D64] hover:bg-[#52525D] ${wrong ? 'bg-red-500 hover:bg-red-500' : ''} ${correct ? 'bg-green-500 hover:bg-green-500' : ''} ${className}`}
    >
      {children}
    </button>
  );
};
