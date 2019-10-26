module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env")({ stage: 1 }),
    require("cssnano")({
      preset: "default"
    })
  ]
};
