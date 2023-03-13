import useGetJokes from "../hooks/useGetJokes";
import { Spin } from "antd";

const RandomJoke2 = () => {
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

export default RandomJoke2;
