import { type InputHTMLAttributes, type ChangeEvent } from "react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  city: string;
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <input
      {...props}
      type="text"
      className="p-3 w-full text-white bg-gray-600 rounded-lg focus:outline-none"
    />
  );
};
