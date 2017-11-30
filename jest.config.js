//var webpackConfig = require('./config/webpack.config.test');
module.exports = {

  "transformIgnorePatterns": [

  ],
  testRegex: "(/components/.*|(\\.|/))\\.(test.ts?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "html",
    "vue"
  ],
  moduleNameMapper: {
    /* */"^vue$": "vue/dist/vue.common.js",
    'vue$': 'vue/dist/vue.esm.js',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/util/fileMock.js",
    "\\.(css|less|sass)$": "<rootDir>/src/util/styleMock.js",
  },
  transform: {
    ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor",
    "^.+\\.ts?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    "^.+\\.html?$": "html-loader-jest"

  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/components/**/*.ts",
    "!**/src/components/**/*.Links.ts",
    "!**/src/components/**/index.ts",
    "!**/src/components/**/*.test.ts",
    "!**/node_modules/**"
  ],
};
