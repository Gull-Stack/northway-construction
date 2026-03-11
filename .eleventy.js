module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.addFilter("date", function(dateObj, format) {
    if (!dateObj) return "";
    var d = new Date(dateObj);
    if (format === "%Y-%m-%d") {
      return d.toISOString().split('T')[0];
    }
    return d.toISOString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk"
  };
};
