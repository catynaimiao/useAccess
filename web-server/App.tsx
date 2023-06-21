import * as React from "react";
import Home from "./Home";
import { AccessProvider, useSubcribe } from "../src/index";

export function App() {
  // example for use useSubcribe ，recommend using useSWR.
  const fetcher = () =>
    fetch("http://localhost:3000/access").then((response) => response.json());
  const access = useSubcribe(fetcher);

  return (
    <AccessProvider value={access}>
      <Home />
    </AccessProvider>
  );
}
