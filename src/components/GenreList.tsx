import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <div>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  );
};

export default GenreList;
