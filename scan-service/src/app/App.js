import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./scss/App.scss"

function App() {
  const elements = useRoutes(routes)
  return (
    <>
    {elements}
    </>

  );
}

export default App;
