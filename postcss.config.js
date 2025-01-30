module.exports = (ctx) => {
  const plugins = {
    autoprefixer: {
      ...ctx.options.autoprefixer,
      browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"],
      flexbox: "no-2009",
    },
    tailwindcss: {},
    cssnano: {},
  };
  // require("tailwindcss"),
  // require("cssnano")({
  //   preset: "default",
  // }),
  return { plugins };
};
