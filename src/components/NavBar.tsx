import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";
import SearchGames from "./SearchGames";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} blockSize={"60px"} />
      <SearchGames></SearchGames>
      <DarkMode></DarkMode>
    </HStack>
  );
};

export default NavBar;
