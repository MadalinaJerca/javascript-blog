module.exports = function (eleventyConfig) {
    return {
      dir: {
        output: "dist",
        input: "src"
      },
    };
};
  
/* const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      layouts: "src"
    }
  }
}; */