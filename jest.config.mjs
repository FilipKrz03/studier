import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns : [
    "node_modules\/(?!(@ngrx|deck.gl|ng-dynamic))"
  ]
};
export default createJestConfig(customJestConfig);