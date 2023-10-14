import path from "path"
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	webpackFinal: async (config, { configType }) => {

		if (!config.resolve) { return config }

		config.resolve.alias = {
		  ...config.resolve.alias,
		  "@/lib": path.resolve(__dirname, "../lib"),
		  "@/app": path.resolve(__dirname, "../app"),
		  "@/components": path.resolve(__dirname, "../components"),
		};

		return config
	}
	
};
export default config;
