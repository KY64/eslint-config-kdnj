# Enforces Import Statement Order

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
