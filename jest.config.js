const { createJestConfig } = require('@sqs/febs-test-config');

module.exports = createJestConfig(baseConfig => {
  return {
    ...baseConfig,
    displayName: 'creative-sandbox',
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testMatch: [
      '**/__tests__/**/*.test.{ts,js,tsx,jsx}',
      '!**/__tests__/**/*.cypress.test.{ts,js,tsx,jsx}',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: [
      ...(baseConfig.setupFilesAfterEnv || []),
      require.resolve('./config/jest/setupTestFramework.ts'),
    ],
  };
});
