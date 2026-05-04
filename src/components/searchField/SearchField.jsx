"use client";

import { Label, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchFieldPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearchField = (e) => {
    e.preventDefault();
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  };
  return (
    <form>
      <SearchField name="search">
        <Label className="text-white">Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            placeholder="Search Books"
            onChange={handleSearchField}
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
    </form>
  );
};

export default SearchFieldPage;
