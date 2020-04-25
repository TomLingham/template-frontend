module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!**/__tests__/**"],
  globals: { __DEV__: false },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["<rootDir>/**/__test__/**/*.test.ts?(x)"],
  transform: { "^.+\\.(ts|tsx)$": "babel-jest" },
  setupFilesAfterEnv: ["<rootDir>/scripts/jest.setup.ts"],
};
