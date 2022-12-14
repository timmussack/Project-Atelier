module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['Client/src/**/*.{js,jsx}'],
  coverageThreshold: {
    "Client/src/components/ProductDetails/": {
      "lines": 70,
      "Statements": 70,
      "Branches": 70,
      "Functions": 70

    }
  },
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageReporters: ['html'],
};
