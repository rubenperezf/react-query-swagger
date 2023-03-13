import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import CreateJoke from "../pages/CreateJoke";
import RandomJoke from "../pages/RandomJoke";
import RandomJoke2 from "../pages/RandomJoke2";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Tabs
    onChange={(index) => {
        if (index === "1") {
          navigate("/");
        } else if (index === "2") {
          navigate("/create-joke");
        } else if (index === "3") {
          console.log("her")
          navigate("/random-joke");
        }
      }}
      defaultActiveKey="1"
      items={[
        {
          label: "Random Joke",
          key: "1",
        },
        {
          label: "Create Joke",
          key: "2",
        },
        {
          label: "Random Joke 2",
          key: "3",
        },
      ]}
    />
  );
};

export default NavBar;
