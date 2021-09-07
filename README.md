<!-- markdownlint-disable MD033 MD036 MD041 -->

# eslint-config-kdnj

Koding Ninja's ESLint configuration with bundled dependencies

- [Installing](#installing)
- [Usage](#usage)
  - [For non-React projects](#for-non-react-projects)
  - [For React projects\*](#for-react-projects)
  - [For Next.js projects\*](#for-nextjs-projects)
- [Rules](#rules)
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

## Rules

The rules that are applied on this configuration extend from:

- [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds): Opinionated rules by [Kent C. Dodds](https://github.com/kentcdodds)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): disable any ESLint rules that conflict with Prettier
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): enable to integrate ESlint with Prettier
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort): sort `import` order in a file

However, there is some rule that is being overridden by this configuration which is shown on the table below:

❌: Disabled

🔧: Fixable with `eslint --fix`

| ❌ | 🔧 | Rule | Description |
|:--:|:--:|------|-------------|
|    |    | [import/extensions](docs/rules/import-extensions.md) | Ensure consistent use of file extension within the import path |
|    | 🔧 | [import/newline-after-import](docs/rules/newline-after-import.md) | Enforces having one or more empty lines after the last import statement |
|    | 🔧 | [simple-import-sort/exports](docs/rules/sort-export.md) | Enforces the order of `export` statement |
| ❌ |    | [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md) | Import sorting (disabled to prevent conflict with [simple-import-sort/imports](docs/rules/sort-import.md)) |
| ❌ |    | [sort-imports](https://eslint.org/docs/rules/sort-imports) | Import sorting (disabled to prevent conflict with [simple-import-sort/imports](docs/rules/sort-import.md)) |
|    | 🔧 | [simple-import-sort/imports](docs/rules/sort-import.md) | Enforces the order of `import` statement |
| ❌ |    | [max-lines](https://eslint.org/docs/rules/max-lines) | Enforces a maximum number of lines per file |
| ❌ |    | [max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function) | Enforces a maximum number of lines of code in a function |
| ❌ |    | [no-void](https://eslint.org/docs/rules/no-void) | Disallow `void` operators |
| ❌ |    | [one-var](https://eslint.org/docs/rules/one-var) | Enforces variables to be declared either together or separately in functions |
| ❌ |    | [require-await](https://eslint.org/docs/rules/require-await) | Disallow async functions which have no `await` expression |
|    |    | [\@typescript-eslint/no-explicit-any](docs/rules/no-explicit-any.md) | Disallows usage of `any` type |
| ❌ |    | [\@typescript-eslint/no-unnecessary-condition](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md) | Prevents conditionals where an expression is always evaluates to truthy or falsy |
|    |    | [\@typescript-eslint/no-unsafe-assignment](docs/rules/no-unsafe-assignment.md) | Disallows assigning a value with `any` type into a variable |
| ❌ |    | [\@typescript-eslint/require-await](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md) | Disallows async functions which have no `await` expression |
|    |    | [\@typescript-eslint/restrict-template-expressions](docs/rules/restrict-template-expressions.md) | Enforces template literal expressions to be of string type |
| ❌ |    | [\@typescript-eslint/unbound-method](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md) | Enforces unbound methods are called with their expected scope |

## Suggestions and/or questions

Head over to our [dedicated Discord channel for `eslint-config-kdnj`](https://discord.gg/6M2Q2btPkS).

## License

[MIT License, Copyright (c) 2021 Koding Ninja](./LICENSE)
