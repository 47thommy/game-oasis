import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <div>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  );
};

export default GenreList;
