const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

module.exports = [
  {
    ignores: [".history/**", "**/.history/**", ".vercel/output/**"]
  },
  ...nextCoreWebVitals
];
