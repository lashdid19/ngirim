import type { ReactNode } from "react";

interface ButtonProps {
  text: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onclick: () => void;
}

export default function Button({text, fullWidth = true, disabled = false, onclick} : ButtonProps) {
  return (
    <button
      className={`${
        fullWidth && "w-full"
      } p-3 font-bold text-white rounded ${disabled ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
      onClick={onclick}
      disabled={disabled}
    >
      {`${text}`}
    </button>
  );
}
