import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({ children, className = "", ...props }: PrimaryButtonProps) {
  return (
    <button
      className={`
        bg-red-600 hover:bg-red-700 active:bg-red-800
        text-white font-semibold rounded-2xl
        px-4 py-2 sm:px-5 sm:py-3 text-lg sm:text-xl
        transition ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
