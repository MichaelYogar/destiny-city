import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Search: React.FC = () => {
  const [search, setSearch] = useState<String>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        size="xs"
        isInvalid
        errorBorderColor="crimson"
        placeholder="City"
      />
      <Button
        onClick={handleClick}
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Search
      </Button>
    </>
  );
};

export default Search;
