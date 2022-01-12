module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>', '<rootDir>/src'],
  testMatch: ['**/*.steps.[jt]s?(x)', '**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    '^.+\\.tsx?$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['./lib', './bin', './dist', './tmp'],
  collectCoverageFrom: ['<rootDir>/src/**/*.[jt]s?(x)', '!<rootDir>/src/types/ITestJson.ts'],
};
