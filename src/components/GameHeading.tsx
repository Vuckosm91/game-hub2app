import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "./store";

const GameHeading = () => {
  const GenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(GenreId);

  const PlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(PlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
