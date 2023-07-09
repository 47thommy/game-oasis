import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, isLoading } = useGenre();
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="6px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImage(genre.image_background)}
            ></Image>
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}{" "}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
