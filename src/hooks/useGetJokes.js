import { useQuery } from "react-query";
import { getJokes } from "../services/JokesService";

const useGetJokes = () => {
  return useQuery("jokes", getJokes, {
    // refetchOnWindowFocus: true,
    // cacheTime: 0,
    // staleTime: "infinity",
  });
};

export default useGetJokes;
