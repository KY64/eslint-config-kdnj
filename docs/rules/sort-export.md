# Enforces Export Statement Order

This rule enforces a convention in the order of `export` statement with `from`. The rule is extended from [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort). The rule that is applied to this configuration is shown below:

```js
// index.js

module.exports = {
  // ...
  rules: {
  // ...
    "simple-import-sort/exports": "warn",
  // ...
  }
}
```

The rule that is applied to `simple-import-sort/exports` means it will warn us if we don't sort the `export` statement with the following order:

1. Export from parent directory (e.g. `export {helper} from "../../lib/helper"`)
2. Export from current directory (e.g. `export {Button} from "./button/Danger`)
3. Export using path mapping (e.g. `export {Error} from "@/components/error"`)
4. Export from any package/url alphabetically (e.g. `export * from "an-npm-package"`)

Learn more about the rule [here](https://github.com/lydell/eslint-plugin-simple-import-sort#exports)

> **Note:**
>
> Export statement without `from` will not be affected by this rule

#### Example

- **Incorrect**

```jsx
export { readFile } from "fs";             
export * as ns from "https://example.com/script";
export { Error } from "@/components/error";
export { Yellow } from "an-npm-package";
export { default as Home } from "./index";
export { a } from "../../button";          
```

- **Correct**

```jsx
export { Button } from "../../button";          
export { default as Home } from "./index";
export { Error } from "@/components/error";
export * from "an-npm-package";
export { readFile } from "fs";             
export * as ns from "https://example.com/script";
```
