module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
