import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import CreateJoke from "./pages/CreateJoke";
import NavBar from "./components/NavBar";
import RandomJoke from "./pages/RandomJoke";
import RandomJoke2 from "./pages/RandomJoke2";

export const Router = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      // queries: {
      //   cacheTime: // default is 5 minutes
    },
  });


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<RandomJoke />}></Route>
          <Route path="/create-joke" element={<CreateJoke />}></Route>
          <Route path="/random-joke" element={<RandomJoke2 />}></Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default Router;
