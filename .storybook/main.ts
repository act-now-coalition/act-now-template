const storybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  refs: {
    "act-now-packages": {
      title: "Act Now Components",
      url: "https://act-now-packages.web.app/storybook",
      expanded: true,
    },
  },
};

export default storybookConfig;
