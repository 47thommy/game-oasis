import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface gameCardContainerProps {
  children: ReactNode;
}
const GameCardContainer = ({ children }: gameCardContainerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
