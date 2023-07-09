import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface gameInterface {
  games: Game;
}
const GameCard = ({ games }: gameInterface) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={games.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <PlatformIconList
          platforms={games.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
