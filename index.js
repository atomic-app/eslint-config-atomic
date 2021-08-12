module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "no-async-foreach",
    "prettier",
    "no-only-tests",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-shadow": "error",
    "no-async-foreach/no-async-foreach": "error",
    eqeqeq: "error",
    "array-callback-return": [
      "error",
      {
        checkForEach: true,
      },
    ],
    "no-unused-expressions": "error",
    "no-shadow-restricted-names": "error",
    "no-only-tests/no-only-tests": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/require-array-sort-compare": [
      "error",
      {
        ignoreStringArrays: true,
      },
    ],
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: false,
        semi: false,
        singleQuote: true,
        trailingComma: "none",
        arrowParens: "avoid",
      },
    ],
  },
};
