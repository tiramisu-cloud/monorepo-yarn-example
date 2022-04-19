# monorepo-yarn-example

yarn 3.2.0 monorepo containing a react webapp in /frontend and a express api on /backend both hosted separately on [tiramisu.cloud](https://www.tiramisu.cloud/)

# Steps I did to create this monorepo

Install yarn globally if you don't have it yet

```bash
npm install -g yarn
```

Update to lastest stable version available of yarn

```bash
yarn set version stable
```

```bash
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

```bash
yarn create react-app frontend
```

Run yarn to clean frontend/node_modules

```bash
yarn
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

```bash
yarn dlx express-generator backend
```

Fix express dependency on jade by adding this code to .yarnrc.yml

```yml
#.yarnrc.yml
packageExtensions:
  "express@*":
    dependencies:
      "jade": "*"
```

and then run yarn

```bash
yarn
```
