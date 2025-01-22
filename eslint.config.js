import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

import eslint from "@eslint/js";

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	{
		ignores: ["eslint.config.js", "tailwind.config.js"],
		settings: { react: { version: "18.3" } },
		plugins: {
			react
		},
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	{
		rules: {
			"no-var": "error",
			"prefer-const": "warn",
			"array-callback-return": "error",
			"no-restricted-imports": ["error", { patterns: ["../"] }],
			"no-console": ["error", { allow: ["warn", "error"] }],
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules
		}
	},
	{
		rules: {
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/restrict-plus-operands": "error",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/consistent-type-exports": "error",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-confusing-void-expression": "error",
			"@typescript-eslint/no-duplicate-enum-values": "warn",
			"@typescript-eslint/no-mixed-enums": "warn",
			"@typescript-eslint/no-unnecessary-condition": "warn",
			"@typescript-eslint/prefer-enum-initializers": "warn",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: "variable",
					types: ["boolean"],
					format: ["PascalCase"],
					prefix: ["is", "should", "has", "can", "did", "will"]
				}
			]
		}
	}
);
