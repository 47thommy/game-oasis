import {
  FaWindows,
  FaLinux,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface platformProps {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: platformProps) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platfrom) => (
        <Icon
          key={platfrom.id}
          as={IconMap[platfrom.slug]}
          color="gray.400"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
