import { useEffect, useState } from "react";
import axios from "axios";
import useGetJokes from "../hooks/useGetJokes";
import { Alert, Space, Spin } from "antd";
import { useQuery } from "react-query";
import { getJokes } from "../services/JokesService";

const RandomJoke = () => {
  // const { isIdle, isLoading, isError, data, error, refetch, isFetching } =
  //   useQuery("jokes", getJokes, {});

  const { data, isLoading } = useGetJokes();

  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "black",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      {isLoading ? (
        <Spin />
      ) : (
        data.map((joke, index) => (
          <div
            key={index}
            style={{
              color: "white",
              fontSize: "30px",
              minHeight: "100px",
              border: "1px solid white",
              marginBottom: "10px",
            }}
          >
            <p>{joke?.question}</p>
            <p>{joke?.answer}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RandomJoke;
