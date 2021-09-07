# Enforces Template Literal Expressions To Be Of String Type

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
