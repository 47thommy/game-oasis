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
    <Card>
      <Image src={getCroppedImage(games.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={games.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{games.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
