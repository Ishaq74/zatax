/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector"],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    // Font weights
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          50: "#f0fdf4",  // Très clair
          100: "#dcfce7", // Clair
          200: "#bbf7d0", // Plus clair
          300: "#86efac", // Moyen clair
          400: "#4ade80", // Moyen
          500: "#22c55e", // Principal
          600: "#16a34a", // Foncé
          700: "#15803d", // Plus foncé
          800: "#166534", // Très foncé
          900: "#14532d", // Presque noir
          950: "#052d1e", // Presque noir profond
        },
        neutral: {
          50: "#f9fafb",  // Très clair
          100: "#f3f4f6", // Clair
          200: "#e5e7eb", // Plus clair
          300: "#d1d5db", // Moyen clair
          400: "#9ca3af", // Moyen
          500: "#6b7280", // Principal
          600: "#4b5563", // Foncé
          700: "#374151", // Plus foncé
          800: "#1f2937", // Très foncé
          900: "#111827", // Presque noir
          950: "#030712", // Presque noir profond
        },
      },
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        text: ["Palanquin Dark", ...defaultTheme.fontFamily.sans],
        headings: ["Palanquin Dark", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": { boxShadow: "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);" },
        },
        fadeInShadowDark: {
          "100%": { boxShadow: "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);" },
        },
        'bounce-slow': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-20px)', // Ajustez selon vos besoins
          },
          '60%': {
            transform: 'translateY(-10px)', // Ajustez selon vos besoins
          },
        },
        'bounce-fast': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-30px)', // Ajustez selon vos besoins
          },
          '60%': {
            transform: 'translateY(-15px)', // Ajustez selon vos besoins
          },
        },
        'bounce-small': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)', // Ajustez selon vos besoins
          },
          '60%': {
            transform: 'translateY(-5px)', // Ajustez selon vos besoins
          },
        },
        'bounce-basic': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-20px)', // Réglage par défaut
          },
          '60%': {
            transform: 'translateY(-10px)', // Réglage par défaut
          },
        },
        'bounce-large': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-40px)', // Ajustez selon vos besoins
          },
          '60%': {
            transform: 'translateY(-20px)', // Ajustez selon vos besoins
          },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
        'bounce-small-slow': 'bounce-small 2s ease-in-out infinite',
        'bounce-small-fast': 'bounce-small 0.5s ease-in-out infinite',
        'bounce-basic-slow': 'bounce-basic 2s ease-in-out infinite',
        'bounce-basic-fast': 'bounce-basic 0.5s ease-in-out infinite',
        'bounce-large-slow': 'bounce-large 2s ease-in-out infinite',
        'bounce-large-fast': 'bounce-large 0.5s ease-in-out infinite',
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(function ({ addVariant }) {
      addVariant("dark-me", ".dark_&");
    }),
  ],
};
