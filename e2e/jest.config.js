module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["<rootDir>/**/*.test.ts?(x)"],
  transform: { "^.+\\.(ts|tsx)$": "babel-jest" },
  setupFilesAfterEnv: ["<rootDir>/setup.ts"]
};
