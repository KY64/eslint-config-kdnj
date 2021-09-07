# Enforces Having One Or More Empty Lines After The Last Import Statement

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
