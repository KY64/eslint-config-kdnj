# Ensure Consistent Use of File Extension Within The Import Path

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
