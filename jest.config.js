module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['Client/src/**/*.{js,jsx}'],
  coverageThreshold: {
    "global": {
      "lines": 70
    }
  },
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageReporters: ['html'],
};
