# Disallows Assigning A Value With Any Type Into A Variable

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

