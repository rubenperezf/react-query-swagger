import { useMutation, useQueryClient } from "react-query";
import { createJoke } from "../services/JokesService";

const useCreateJoke = () => {
  const queryClient = useQueryClient();
  console.log("queryClient", queryClient)

  return useMutation("jokes", (data) => createJoke(data), {

    onSuccess: (res) => {
      // Update the cache
      return queryClient.setQueriesData("jokes", (olData) => {
        return [...olData, res.data];
      });
    },
    onSettled:() => {
      // Invalidate every query in the cache
    //  queryClient.invalidateQueries();
      // Invalidate every query with a key that starts with `todos`
      // queryClient.invalidateQueries("jokes");
    },
  });
};

export default useCreateJoke;
