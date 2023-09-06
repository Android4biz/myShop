const path = require("path");

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [
				".ts",
				".tsx",
				".scss",
				".svg",
				".png",
				".jpg",
			],
		},
		"import/resolver": {
			typescript: {
				project: path.resolve("./tsconfig.json"),
			},
		},
		"import/external-module-folders": [
			"node_modules",
			"node_modules/@types",
		],
		react: {
			version: "detect",
		},
	},
};
