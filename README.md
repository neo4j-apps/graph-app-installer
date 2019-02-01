# Graph App Installer

This is used to navigate and install apps on [Neo4j Desktop](https://neo4j.com/developer/neo4j-desktop/).

## Usage

#### Initial setup:

Install [nvm](https://github.com/creationix/nvm#installation)

Activate the correct node.js version using nvm.  You may receive a message instructing you to install the
correct node.js version if you have not done so before.  To ensure you are always using the correct node.js version
you need to run this command every time you work on this project.

```bash
nvm use
```

Install npm and yarn:

1. [installing npm](https://www.npmjs.com/get-npm)
2. [installing yarn](https://yarnpkg.com/en/docs/install)

Install dependencies

```bash
yarn install
```

#### Development mode:

```bash
yarn start
```

#### Production build:

```bash
yarn build
```

#### Testing:

Launches the test runner in the interactive watch mode:

```bash
yarn test
```

## Loading into Neo4j Desktop

* Go to your Neo4j Desktop’s settings (bottom left gear icon).
* Enable development mode.
* Set Development App Entry Point to the http address where this server is running, ex: `http://localhost:3000`.
* Set Development App Root Path to this cloned repository, where `package.json` is, ex: `/home/user/graph-app-installer`.
* Click on Development App

