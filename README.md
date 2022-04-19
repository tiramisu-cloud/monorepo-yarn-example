# monorepo-yarn-example

Install yarn globally if you don't have it yet

```bash
npm install -g yarn
```

Update to lastest stable version available

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

````javascript
// package.json
  ...
  "workspaces": [
    "frontend",
    "backend"
  ],
  ...

Create express backend api

```bash
yarn run express-generator backend
````
