// @ts-check

const baseConfig = require(".");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,

  extends: [...baseConfig.extends, "kentcdodds/react", "kentcdodds/jsx-a11y"],

  rules: {
    ...baseConfig.rules,

    // https://github.com/yannickcr/eslint-plugin-react
    "jsx-a11y/accessible-emoji": "off",
    "react/jsx-sort-props": [
      "warn",
      {
        reservedFirst: ["key"],
      },
    ],
  },
};
