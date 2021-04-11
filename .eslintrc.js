module.exports = {
    env: {
        browser: true,
        es6: true,
        "jest/globals": true
    },
    settings: {
        "react": {
            "version": "detect" // detect react version
        }
    },
    extends: [
        "prettier",
        "prettier/react",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    plugins: ["react", "react-hooks", "jest"],
    rules: {
        "react/prop-types": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "complexity": ["warn", 4],
        "max-depth": ["warn", 4],
        "max-lines": ["warn", {"max": 200, "skipComments": true, "skipBlankLines": true}],
        "max-lines-per-function": ["warn", 100],
        "max-params": ["warn", 3],
        "max-statements": ["warn", 10],
    },
    parserOptions: {
        "sourceType": "module",
        "ecmaVersion": 2020,
        ecmaFeatures: {
            "jsx": true,
        }
    }
};
