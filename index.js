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
    "functional",
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
    "functional/immutable-data": [
      "warn",
      {
        ignoreImmediateMutation: true,
        ignoreClasses: true,
        ignoreIdentifierPattern: ["mut_"],
      },
    ],
    "array-callback-return": [
      "error",
      {
        checkForEach: true,
      },
    ],
    eqeqeq: "error",
    "no-async-foreach/no-async-foreach": "error",
    "no-console": "off",
    "no-only-tests/no-only-tests": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-throw-literal": "error",
    "no-unused-expressions": "error",
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: false,
        semi: false,
        singleQuote: true,
        trailingComma: "none",
        arrowParens: "avoid",
        experimentalTernaries: false,
      },
    ],
    "require-atomic-updates": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false,
          object: false,
        },
        extendDefaults: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/require-array-sort-compare": [
      "error",
      {
        ignoreStringArrays: true,
      },
    ],
  },
}
