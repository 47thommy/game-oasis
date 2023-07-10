import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
