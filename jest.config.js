/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/__tests__"],
  transform: { "^.+\\.tsx?$": ["ts-jest", { tsconfig: { jsx: "react-jsx", esModuleInterop: true } }] },
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/$1" }
};
