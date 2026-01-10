/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @jest-config-loader ts-node */
/** @jest-config-loader-options {"transpileOnly": true} */

import type { Config } from 'jest';

const config: Config = {
  // Indicates whether the coverage information should be collected
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // ✅ REQUIRED for NodeNext + TypeScript + ESM
  preset: 'ts-jest/presets/default-esm',

  // Treat TypeScript files as ES Modules
  extensionsToTreatAsEsm: ['.ts'],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // ✅ THIS is the missing piece
  // Remove .js extension so Jest can resolve .ts sources
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  // Ignore build & coverage in watch mode
  watchPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/coverage/"
  ],

  // Whether to use watchman for file crawling
  watchman: false,
};

export default config;