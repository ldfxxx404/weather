import { type InputHTMLAttributes, type ChangeEvent } from 'react';
import SearchIcon from '@/components/icons/searchIcon';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  city: string;
}

export const SearchBar = ({ placeholder, onChange, city, ...props }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

      <input
        {...props}
        type="text"
        placeholder={placeholder}
        value={city}
        onChange={onChange}
        className="pl-10 p-3 w-full text-gtext bg-card rounded-lg focus:outline-none"
      />
    </div>
  );
};
