const peerDeps = Object.keys(require("./package.json").peerDependencies);

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    JSX: true
  },
  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "@typescript-eslint/eslint-plugin"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "no-alert": "error",
    "no-console": "warn",
    "prefer-const": "error",
    "default-case": "warn",
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": ["error", { ignore: peerDeps }]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      parserOptions: {
        sourceType: "module",
        project: ["./tsconfig.json"]
      }
    }
  ],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      alias: {
        map: [
          ["@utilityjs/use-get-latest", "./src/useGetLatest/useGetLatest.ts"],
          [
            "@utilityjs/use-event-listener",
            "./src/useEventListener/useEventListener.ts"
          ],
          [
            "@utilityjs/use-previous-value",
            "./src/usePreviousValue/usePreviousValue.ts"
          ]
        ]
      }
    }
  }
};
