# monorepo-yarn-example

yarn 3.2.0 monorepo containing a react webapp in /frontend and a express api on /backend both hosted separately on [tiramisu.cloud](https://www.tiramisu.cloud/)

# Steps I did to create this monorepo

Install yarn globally if you don't have it yet

```shell
npm install -g yarn
```

Update to lastest stable version available of yarn

```shell
yarn set version stable
```

```shell
yarn init -y
```

Enable Plug and Play by adding this line at the top of .yarnrc.yml

```yml
#.yarnrc.yml
nodeLinker: pnp
```

Add frontend to workspaces in package.json

```javascript
// package.json
  ...
  "workspaces": [
    "frontend"
  ],
  ...
```

Create React frontend webapp

```shell
yarn create react-app frontend
```

Run yarn to clean frontend/node_modules

```shell
yarn
```

Disable eslint by adding DISABLE_ESLINT_PLUGIN=true in front of the scripts in package.json.
Something needs to be done to have eslint work with yarn but don't have time now to figure it out so I'll just disable it.

```json
// package.json
 ...
  "scripts": {
    "start": "DISABLE_ESLINT_PLUGIN=true react-scripts start",
    "build": "DISABLE_ESLINT_PLUGIN=true react-scripts build",
    "test": "DISABLE_ESLINT_PLUGIN=true react-scripts test",
    "eject": "DISABLE_ESLINT_PLUGIN=true react-scripts eject"
  },
  ...
```

Add backend to workspaces in package.json

```javascript
// package.json
  ...
  "workspaces": [
    "frontend",
    "backend"
  ],
  ...
```

Create express backend api

```shell
yarn dlx express-generator backend
```

and then run yarn

```shell
yarn
```

Change current working directory to /backend

```shell
cd backend
```

Replace the content of backend/app with

```js
// backend/app.js
var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.json({
    healthy: true,
  });
});

module.exports = app;
```

Install @vendia/serverless-express

```shell
yarn add @vendia/serverless-express
```

add file handler.js at the root of the project

```shell
touch handler.js
```

with the following content

```js
// handler.js
const serverlessExpress = require("@vendia/serverless-express");
const app = require("./app.js");

module.exports = {
  default: serverlessExpress({
    app,
  }),
};
```

install webpack

```shell
yarn add --dev webpack webpack-cli
```

add webpack.config.js in /backend

```shell
touch webpack.config.js
open webpack.config.js
```

add the following to backend/webpack.config.js

```js
const path = require("path");

module.exports = {
  entry: {
    handler: ["./handler.js"],
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, `build`),
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
};
```

in backend/package.json add a build script calling webpack:

```json
  ...
  "scripts": {
    "start": "node ./bin/www",
    "build": "webpack"
  },
  ...
```
