import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchGames = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="Search Games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchGames;
