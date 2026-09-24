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
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        text: "var(--text)",
        "text-2": "var(--text-2)",
        "text-muted": "var(--text-muted)",
        muted: "var(--text-muted)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          active: "var(--accent-active)",
          soft: "var(--accent-soft)",
          border: "var(--accent-border)",
        },
        "on-accent": "var(--on-accent)",
        success: {
          DEFAULT: "var(--success)",
          soft: "var(--success-soft)",
        },
        progress: {
          DEFAULT: "var(--progress)",
          soft: "var(--progress-soft)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        card: "14px",
        btn: "10px",
        chip: "6px",
      },
      lineHeight: {
        body: "1.7",
      },
    },
  },
  plugins: [],
};

export default config;
