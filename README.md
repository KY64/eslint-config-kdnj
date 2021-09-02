<!-- markdownlint-disable MD033 MD036 MD041 -->

# eslint-config-kdnj

Koding Ninja's ESLint configuration with bundled dependencies

- [Installing](#installing)
- [Usage](#usage)
  - [For non-React projects](#for-non-react-projects)
  - [For React projects\*](#for-react-projects)
  - [For Next.js projects\*](#for-nextjs-projects)
- [Rules](#rules)
  - [Import Extensions (no auto-fix)](#import-extensions-no-auto-fix)
  - [Newline After Import (auto-fix)](#newline-after-import-auto-fix)
  - [Sort Import (auto-fix)](#sort-import-auto-fix)
  - [Max Lines (disabled)](#max-lines-disabled)
  - [Max Lines Per Function (disabled)](#max-lines-per-function-disabled)
  - [No Void (disabled)](#no-void-disabled)
  - [One Var (disabled)](#one-var-disabled)
  - [Require Await (disabled)](#require-await-disabled)
  - [No Explicit Any (typescript, no auto-fix)](#no-explicit-any-typescript-no-auto-fix)
  - [No Unnecessary Condition (typescript, disabled)](#no-unnecessary-condition-typescript-disabled)
  - [No Unsafe Assignment (typescript, no auto-fix)](#no-unsafe-assignment-typescript-no-auto-fix)
  - [Restrict Template Expression (typescript, no auto-fix)](#restrict-template-expression-typescript-no-auto-fix)
  - [Unbound Method (typescript, disabled)](#unbound-method-typescript-disabled)
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

However, there is some rule that is being overridden by this configuration which is explained below:

### Import Extensions (no auto-fix)

This rule will dictate whether file extension should be added or not when importing a module. The rule is extended from [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) which is already included in [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort). The rule that is applied to this configuration is shown below:

```js
// index.js

const ignoredImportExtensions = [
  "bmp",
  "css",
  "gif",
  "graphql",
  "ico",
  "jpeg",
  "jpg",
  "json",
  "png",
  "svg",
  "webp",
];

module.exports = {
	// ...
	rules: {
    "import/extensions": [
      "warn",
      "never",
      Object.fromEntries(ignoredImportExtensions.map((ext) => [ext, "ignorePackages"])),
    ],
	// ...
}
```

This rule means we should *never* add file extension when importing a module and it will warn us if we did. However, there are some file extensions that should be added when using `import`. These file extensions are declared in `ignoredImportExtensions` variable which is shown in the snippet above.

Learn more about the rule [here](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md)

#### Example

- **Incorrect**

```jsx
import "./style.css";

// Unexpected use of file extension "jsx"
import "@/components/Footer.jsx";
import "@/components/Layout.jsx";
import "@/components/Navbar.jsx";
```

- **Correct**

```jsx
import "./style.css";

import "@/components/Footer";
import "@/components/Layout";
import "@/components/Navbar";
```

### Newline After Import (auto-fix)

This rule will enforce to add newline after the last top-level `import` or `require` in a file. The rule is extended from [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) which is already included in [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort). The rule that is applied to this configuration is shown below:

```js
// index.js

module.exports = {
  // ...
	rules: {
  // ...
    "import/newline-after-import": "warn",
  // ...
}
```

This rule means we should add a newline after the last top-level `import` or `require`. If we didn't add a newline between the last `import` or `require` and other statements, it will warn us.

Learn more about the rule [here](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md)

#### Example

- **Incorrect**

```jsx
import "@/components/Footer";
import "@/components/Layout";
import "@/components/Navbar";
const FOO = "bar";
```

- **Correct**

```jsx
import "@/components/Footer";
import "@/components/Layout";
import "@/components/Navbar";

const FOO = "bar";
```

### Sort `import` (auto-fix)

This rule enforces a convention in the order of `import` or `require` statement. The rule is extended from [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort). The rule that is applied to this configuration is shown below:

```js
// index.js

module.exports = {
  // ...
  rules: {
  // ...
    "import/order": "off",
    "sort-imports": "off",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^.+\\.s?css$"],
          ["^\\u0000"],
          ["^react$", "^react-dom$"],
          ["^~", "^@/"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
  // ...
  }
}
```

`import/order` and `sort-imports` are turned off because they would conflict with `simple-import-sort/imports` rule. The rule that is applied to `simple-import-sort/imports` means we have to group the `import` statement then sort it with the following order:

1. CSS file (e.g. `import "./style.css"`)
2. Load modules with side effect (e.g. `import "typeface-open-sans"`)
3. React modules (e.g. `import React from "react"`)
4. Path mapping (e.g. `import Foo from "@/components/Foo"`)
5. Import from parent directory (e.g. `import Foo from "../components/Foo"`)
6. Import from current directory (e.g. `import Bar from "./Button/Danger"`)

Each group is separated with a newline. Learn more about the rule [here](https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping)

> **Note:**
>
> This configuration only sort path mapping with custom prefix `@` and `~`

#### Example

- **Incorrect**

```jsx
import React from "react"; // React modules

import "../public/style/style.css"; // CSS file
import "typeface-open-sans"; // Load modules with side effect

import Foo from "@/components/Foo"; // Path mapping
import Bar from "@/components/Bar";
import {fetch} "../lib/fetch"; // Import from parent directory
import BlogList from "./blog/List"; // Import from current directory
```

- **Correct**

```jsx
import "../public/style/style.css"; // CSS file

import "typeface-open-sans"; // Load modules with side effect

import React from "react"; // React modules

import Bar from "@/components/Bar"; // Path mapping
import Foo from "@/components/Foo";

import {fetch} "../lib/fetch"; // Import from parent directory

import BlogList from "./blog/List"; // Import from current directory
```

### Max Lines (disabled)

This rule is part of ESlint [rule](https://eslint.org/docs/rules/max-lines) which enforces a maximum number of lines per file. Since the acceptable maximum number of lines is varied, this rule is disabled in this configuration.

### Max Lines Per Function (disabled)

This rule is part of ESlint [rule](https://eslint.org/docs/rules/max-lines-per-function) which dictates the limit of the number of lines in a function. Since the acceptable maximum number of lines is varied, this rule is disabled in this configuration.

### No Void (disabled)

This rule is part of ESlint [rule](https://eslint.org/docs/rules/no-void) which disallows using `void` operator. This rule is disabled in this configuration.

### One Var (disabled)

This rule is part of ESlint [rule](https://eslint.org/docs/rules/one-var) which enforces variables to be declared either together or separately per function. This rule is disabled in this configuration.

### Require Await (disabled)

This rule is part of ESlint [rule](https://eslint.org/docs/rules/require-await) and [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md) which disallows asynchronous function has no `await` expression. This rule is disabled in this configuration.

### No Explicit Any (typescript, no auto-fix)

This rule is only apply on typescript file (**.d.ts**, **.ts**, **.tsx**). The rule disallows usage of `any` type which defeats the purpose of using TypeScript. This rule is extended from [typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) which is already included in [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds). The rule that is applied to this configuration is shown below:

```js
// index.js

module.exports = {
  // ...
  overrides: [
    {
      files: ["**/*.d.ts", "**/*.ts", "**/*.tsx"],
      // ...
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
      // ...
      },
    },
  ],
}
```

This rule means whenever `any` type is used, the linter will warns us. Learn more about the rule [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)

#### Example

- **Incorrect**

```ts
function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />
};

export default MyApp;
```

- **Correct**

```ts
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
};

export default MyApp;
```

### No Unnecessary Condition (typescript, disabled)

This rule is only apply on typescript file (**.d.ts**, **.ts**, **.tsx**). The rule prevents conditionals where an expression is always evaluates to truthy or falsy. This rule is extended from [typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) which is already included in [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds). This rule is disabled in this configuration.

### No Unsafe Assignment (typescript, no auto-fix)

This rule is only apply on typescript file (**.d.ts**, **.ts**, **.tsx**). The rule disallows assigning a value with `any` type into a variable as it could be source of bugs. This rule is extended from [typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) which is already included in [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds). The rule that is applied to this configuration is shown below:

```js
// index.js

module.exports = {
  // ...
  overrides: [
    {
      files: ["**/*.d.ts", "**/*.ts", "**/*.tsx"],
      // ...
      rules: {
      // ...
        "@typescript-eslint/no-unsafe-assignment": "warn",
      // ...
      },
    },
  ],
}
```

This rule means whenever a value with `any` type is assigned to a variable, it will warn us. Learn more about the rule [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md)

#### Example

- **Incorrect**

```ts
const x = 1 as any;
```

- **Correct**

```ts
const x = 1;
```

### Restrict Template Expression (typescript, no auto-fix)

This rule is only apply on typescript file (**.d.ts**, **.ts**, **.tsx**). The rule enforces template literal expressions to be of string type. This rule is extended from [typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) which is already included in [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds). The rule that is applied to this configuration is shown below:

```js
// index.js

module.exports = {
  // ...
  overrides: [
    {
      files: ["**/*.d.ts", "**/*.ts", "**/*.tsx"],
      // ...
      rules: {
      // ...
        "@typescript-eslint/restrict-template-expressions": "warn",
      // ...
      },
    },
  ],
}
```

This rule means it will warn us whenever there is any variable with type other than `string` and `number` inside the template literal expression. Learn more about the rule [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)

#### Example

- **Incorrect**

```ts
const obj = { value: 1 };
const template = `value: ${obj}`;
```

- **Correct**

```ts
const obj = 1;
const template = `value: ${obj}`;
```

### Unbound Method (typescript, disabled)

This rule is only apply on typescript file (**.d.ts**, **.ts**, **.tsx**). The rule will give a warning when a method is used outside of a method call. This rule is extended from [typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) which is already included in [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds). This rule is disabled in this configuration.

## Suggestions and/or questions

Head over to our [dedicated Discord channel for `eslint-config-kdnj`](https://discord.gg/6M2Q2btPkS).

## License

[MIT License, Copyright (c) 2021 Koding Ninja](./LICENSE)
