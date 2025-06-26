export default await (async () => {
  const { FlatCompat } = await import("@eslint/eslintrc");
  const { fileURLToPath } = await import("url");
  const { dirname } = await import("path");

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const compat = new FlatCompat({ baseDirectory: __dirname });

  return [
    ...compat.extends(
      "next",
      "next/core-web-vitals",
      "plugin:jsx-a11y/recommended",
      "plugin:react-hooks/recommended"
    ),
    {
      plugins: {
        "unused-imports": (await import("eslint-plugin-unused-imports")).default,
        perfectionist: (await import("eslint-plugin-perfectionist")).default,
      },
      rules: {
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          { vars: "all", args: "after-used", argsIgnorePattern: "^_" },
        ],
        "perfectionist/sort-imports": [
          "error",
          {
            type: "natural",
            order: "asc",
            groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
          },
        ],
        "jsx-a11y/anchor-is-valid": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  ];
})();
