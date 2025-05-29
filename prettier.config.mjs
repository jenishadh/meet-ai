const config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    // Core libraries
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",

    // Third-party modules
    "<THIRD_PARTY_MODULES>",

    "",

    // Internal env/config dependencies
    "^@/env(.*)$",
    "^@/config/(.*)$",

    // Application logic and data
    "^@/db/(.*)$",
    "^@/actions/(.*)$",
    "^@/data/(.*)$",
    "^@/lib/(.*)$",
    "^@/types/(.*)$",
    "^@/schemas/(.*)$",
    "^@/hooks/(.*)$",

    "",

    // Styling and components
    "^@/styles/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    // App-specific modules
    "^@/app/(.*)$",
    "^@/modules/(.*)$",    

    "",

    // Relative imports
    "^[./]",
  ],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
}

export default config
