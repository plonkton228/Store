import type { StorybookConfig } from "@storybook/react-webpack5";
import { cssRules, paths } from "./configBook";


const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  webpackFinal: async (config) => {
    config.resolve.modules.push('node_modules', paths.modules)
    config.module.rules.push(cssRules)
    config.resolve.extensions.push('.js', '.ts', '.tsx', '.jsx', '.json')
    return config
  }
};
export default config;
