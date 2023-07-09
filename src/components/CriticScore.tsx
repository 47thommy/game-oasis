import { Badge } from "@chakra-ui/react";

interface criticProps {
  score: number;
}

const CriticScore = ({ score }: criticProps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
