import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} blockSize={"60px"} />
      <DarkMode></DarkMode>
    </HStack>
  );
};

export default NavBar;
