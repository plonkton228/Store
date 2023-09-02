module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:storybook/recommended"
    ],

    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project" : ['tsconfig.json']
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "indent": ["error", 4],
        "react/jsx-indent" : ["error", 4],
        "react/jsx-indent-props" : ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "i18next/no-literal-string":  "error",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-floating-promises" : "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "n/handle-callback-err": "off"
    },

    "overrides": [{
        "files" :  ["**/src/**/*.test.{ts,tsx}"],
        "rules" : {
            "i18next/no-literal-string":  "off",
        }
    }]
}
