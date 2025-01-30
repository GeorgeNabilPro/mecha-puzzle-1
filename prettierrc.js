module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  tabwidth: 2,
  printWidth: 80,
  quoteProps: "preserve",
  bracketSpacing: false,
  bracketLine: false,
  endOfLine: "crlf",
  parseWrap: false,
  proseWrap: "never",
  singleAttriburePerLine: true,
  plugins: [require("prettier-plugin-multiline-arrays")],
  "multiline-arrays": {
    "prettier-multiline-arrays-next-threshold": 2,
  },
};
