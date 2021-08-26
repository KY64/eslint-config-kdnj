<!-- markdownlint-disable MD033 MD036 MD041 -->

# eslint-config-kdnj

Koding Ninja's ESLint configuration with bundled dependencies

- [Installing](#installing)
- [Usage](#usage)
  - [For non-React projects](#for-non-react-projects)
  - [For React projects\*](#for-react-projects)
  - [For Next.js projects\*](#for-nextjs-projects)
- [Suggestions and/or questions](#suggestions-andor-questions)
- [License](#license)

## Installing

Add `eslint-config-kdnj` as a dev dependency

```sh
# using npm
npm install --save-dev eslint-config-kdnj

# using yarn
yarn add --dev eslint-config-kdnj
```

## Usage

Add `eslint-config-kdnj` in your ESLint configuration:

### For non-React projects

```js
module.exports = {
  extends: ["eslint-config-kdnj"],
};
```

### For React projects\*

\*) add [`eslint-plugin-jsx-a11y`](https://yarnpkg.com/package/eslint-plugin-jsx-a11y) and [`eslint-plugin-react`](https://yarnpkg.com/package/eslint-plugin-react) as dev dependency

```js
module.exports = {
  extends: ["eslint-config-kdnj/react"],
};
```

### For Next.js projects\*

\*) add [`eslint-config-next`](https://yarnpkg.com/package/eslint-config-next) as dev dependency

```js
module.exports = {
  extends: ["eslint-config-kdnj", "plugin:@next/next/recommended"],
};
```

## Suggestions and/or questions

Head over to our [dedicated Discord channel for `eslint-config-kdnj`](https://discord.gg/6M2Q2btPkS).

## License

[MIT License, Copyright (c) 2021 Koding Ninja](./LICENSE)
