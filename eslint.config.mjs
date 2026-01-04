import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      "unused-imports": unusedImports,
      perfectionist
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", argsIgnorePattern: "^_" }
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          newlinesBetween: 0,
          groups: [
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index"]
          ]
        }
      ],

      "jsx-a11y/anchor-is-valid": "error",

      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/set-state-in-effect": "off"
    }
  },

  globalIgnores([".next/**", "out/**", "next-env.d.ts"])
]);
