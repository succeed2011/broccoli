module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/tests/setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "md", "html"],
  modulePathIgnorePatterns: ["/_site/", "dist"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md|html)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/tests/__mocks__/styleMock.js",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRunner: "jest-jasmine2",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/*/style/index.tsx",
    "!src/*/style/*",
    "!src/*/__tests__/type.test.tsx",
  ],
  transformIgnorePatterns: ["/node_modules/", "/dist/", "lib"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testURL: "http://localhost",
  testEnvironmentOptions: {
    enzymeAdapter: "react17",
  },
  coverageDirectory: "<rootDir>/test/coverage", // 输出覆盖信息文件的目录
};
