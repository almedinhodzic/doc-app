import "./styles.css";
import image from "./react.png";
import logo from "./logo-react.svg";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack Template - {process.env.NODE_ENV} -{" "}
        {process.env.name}
      </h1>
      <img src={image} alt="React Logo" width={400} height={400} />
      <img src={logo} alt="React Logo" width={400} />
      <ClickCounter />
    </>
  );
};
