import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";
import SearchGames from "./SearchGames";
interface SearchGamesProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: SearchGamesProps) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} blockSize={"60px"} />
      <SearchGames onSearch={onSearch}></SearchGames>
      <DarkMode></DarkMode>
    </HStack>
  );
};

export default NavBar;
