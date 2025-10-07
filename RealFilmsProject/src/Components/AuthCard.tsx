import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuthCard({ children, className = "" }: AuthCardProps) {
  return (
    <div
      className={`
        w-full max-w-md sm:max-w-lg lg:max-w-xl 2xl:max-w-2xl
        rounded-3xl bg-gray-500/80 backdrop-blur-sm shadow-xl
        p-6 sm:p-8 lg:p-10 flex flex-col gap-5 text-black
        ${className}
      `}
    >
      {children}
    </div>
  );
}
