import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.js recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Global overrides
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Allow unused variables prefixed with _
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],

      // Allow `any` type for development
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
