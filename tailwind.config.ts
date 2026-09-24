import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-interactive": "var(--border-interactive)",
        "border-strong": "var(--border-strong)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          border: "var(--accent-border)",
        },
        text: "var(--text)",
        "text-2": "var(--text-2)",
        "text-muted": "var(--text-muted)",
        muted: "var(--text-muted)",
        success: "var(--success)",
        progress: {
          DEFAULT: "var(--progress)",
          soft: "var(--progress-soft)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        btn: "0.25rem",
        card: "0.5rem",
      },
      lineHeight: {
        body: "1.65",
      },
    },
  },
  plugins: [],
};

export default config;
