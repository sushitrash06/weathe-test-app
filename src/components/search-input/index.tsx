import React from "react";

interface SearchInputProps {
  onSearch: (cityName: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch((e.target as HTMLInputElement).value);
    }
  };

  return (
    <input
      className="input-search"
      type="text"
      placeholder="Search city..."
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
