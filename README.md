# 🪝useAccess

a react hook with component managing access easily.

you can quickly combine it in your Nextjs or other projects.

## 📝 basic usage

import `useSubcribe` and `AccessProvider`

```jsx
// App.js
// example for use useSubcribe ，recommend using useSWR.
const fetcher = () =>
  fetch("http://localhost:3000/access").then((response) => response.json());
const access = useSubcribe(fetcher);

return (
  <AccessProvider value={access}>
    // provide the access here.
    <Home />
  </AccessProvider>
);
```

using `useAccess` to get the access.

```jsx
// Home.js
const access = useAccess(); // get access using hook.

return (
  <div>
    <Access accessiable={access.canRead}>
      {"show hello world if the accessiable is true."}
      <h1>Hello world! I have access.</h1>
    </Access>
    <Access accessiable={false} failcallback={<h1>I don't have Access</h1>}>
      {"if accessiable is falthy then render failcallback."}
      <h1>Hello world! I have access.</h1>
    </Access>
  </div>
);
```

## examples

install dependencies.

`yarn install`

use terminal run scripts following in different window.

```shell
yarn example-server
yarn example-web-useSubcribeExample
```

then open `http://localhost:1234` in broswer.

backend uses the `json-server` you can edit the `./examples/server/db.json` and rerun the `yarn example-server`.

## recommend access standard

```json
{
  "access": {
    "canReadPost": true,
    "canUpdatePost": true,
    "canDeletePost": true
  }
}
```

you can implement a selector in more complex project. and just a callbackFunction and parse the access got from fetcher. (ps: don't worry mutate the param access)

```js
const selector = (access) => access.posts;
const posts_access = useAccess(selector);
```

and you can define the access response structure like this:

```json
{
  "access": {
    "posts": {
      "canReadPost": true,
      "canUpdatePost": true,
      "canDeletePost": true
    },
    "otherResource": {
      "canRead": false
    }
  },
  "errMsg": null
}
```

## 🚧 plan in the future

- 🛠<span style="color: #008f8f;font-size:1.2em"> feat </span>: custom global access config.
- 🛠<span style="color: #008f8f;font-size:1.2em"> feat </span>: automated access template generate.
- 📚<span style="color: #558f55;font-size:1.2em"> docs </span>: examples with nextauth.
- 📚<span style="color: #558f55;font-size:1.2em"> docs </span>: combine with nextauth.
