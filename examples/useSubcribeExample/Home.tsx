import * as React from "react";
import { useAccess, Access } from "../../src/index";

export default function Home() {
  const access = useAccess();
  console.log("home get access:", access);
  return (
    <div>
      <Access accessiable={access.canRead}>
        <h1>Hello world! I have access.</h1>
      </Access>
      <Access accessiable={false} failcallback={<h1>I don't have Access</h1>}>
        <h1>Hello world! I have access.</h1>
      </Access>
    </div>
  );
}
