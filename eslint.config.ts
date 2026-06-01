import { defineConfig } from "eslint/config"
import stylistic from "@stylistic/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import reactHooks from "eslint-plugin-react-hooks"

export default defineConfig({
    files: ["**/*.{ts,tsx}"],
    plugins: {
        '@stylistic': stylistic,
    },
    extends: [
        reactHooks.configs.flat.recommended,
    ],
    languageOptions: {
        parser: tsParser,
    },
    rules: {
        '@stylistic/indent': ['warn', 4],
        '@stylistic/semi': ['warn', 'never'],
        '@stylistic/no-trailing-spaces': 'warn',
        '@stylistic/eol-last': 'warn',
        // '@stylistic/max-len': ['error' ],

        '@stylistic/jsx-one-expression-per-line': ["warn", { allow: 'non-jsx'}],
        '@stylistic/jsx-closing-bracket-location': 'warn',
        '@stylistic/jsx-equals-spacing': 'warn',
        '@stylistic/jsx-curly-spacing': ['warn', {
            when: 'never',
            children: true
        }],

        '@stylistic/jsx-tag-spacing': 'warn',
        '@stylistic/jsx-wrap-multilines': ['warn', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
        }],

        '@stylistic/exp-jsx-props-style': ['warn', {
            singleLine: {
                maxItems: 2
            },
            multiLine: {
                minItems: 3
            },
        }]
    }
})
