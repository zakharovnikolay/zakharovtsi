import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "medium" | "large";
  borderColor?: "primary" | "secondary";
}

export const Input: React.FC<InputProps> = ({
  inputSize = "medium",
  borderColor = "primary",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    small: "text-sm h-8",
    medium: "text-base h-10",
    large: "text-lg h-12",
  };

  const borderColors = {
    primary: "border border-pink-300",
    secondary: "border border-gray-500",
  };

  return (
    <input
      className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 
        ${sizeClasses[inputSize]} 
        ${borderColors[borderColor]} 
        ${className}`}
      {...props}
    />
  );
};