import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";

interface gameInterface {
  games: Game;
}
const GameCard = ({ games }: gameInterface) => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Image src={getCroppedImage(games.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={games.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
