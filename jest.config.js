module.exports = {
  // 转义
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    // '^.+\\js$': '@sucrase/jest-plugin',
  },
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  modulePathIgnorePatterns: ['/node_modules/', 'dist'],
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'node'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(yourModuleName))"
  ],
}