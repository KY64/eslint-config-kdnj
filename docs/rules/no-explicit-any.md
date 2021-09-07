# Disallows Usage of `any` Type

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

