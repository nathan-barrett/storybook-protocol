/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: require('sass')
      }
    }
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  staticDirs: ["../assets"],
  docs: {
    autodocs: "tag",
  },
};

export default config;
