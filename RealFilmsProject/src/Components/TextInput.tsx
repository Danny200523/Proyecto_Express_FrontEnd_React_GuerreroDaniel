import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export default function TextInput({ id, label, type = "text", ...props }: TextInputProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-lg sm:text-xl font-medium">{label}</span>
      <input
        id={id}
        type={type}
        className="
          bg-white/95 focus:bg-white rounded-2xl
          px-3 py-2 sm:px-4 sm:py-3
          text-base sm:text-lg
          outline-none ring-2 ring-transparent focus:ring-red-500
        "
        {...props}
      />
    </label>
  );
}
