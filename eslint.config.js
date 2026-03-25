const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

module.exports = [
  {
    files: ["**/*"],
    ignores: [".history/**", "**/.history/**", ".next/**", ".vercel/**"]
  },
  ...nextCoreWebVitals
];
