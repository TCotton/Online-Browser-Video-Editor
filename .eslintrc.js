module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "prettier", "react-hooks", "jest"],
  rules: { "react/prop-types": 0 },
};
