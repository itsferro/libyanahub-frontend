/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        border: "hsl(262 30% 30%)",
        input: "hsl(262 30% 25%)",
        ring: "hsl(328 100% 52%)",
        background: "hsl(262 60% 12%)",
        foreground: "hsl(0 0% 100%)",
        primary: {
          DEFAULT: "hsl(262 60% 12%)",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(262 45% 20%)",
          foreground: "hsl(0 0% 100%)",
        },
        accent: {
          DEFAULT: "hsl(328 100% 52%)",
          foreground: "hsl(0 0% 100%)",
        },
        muted: {
          DEFAULT: "hsl(262 40% 25%)",
          foreground: "hsl(0 0% 70%)",
        },
        card: {
          DEFAULT: "hsl(262 45% 18%)",
          foreground: "hsl(0 0% 100%)",
        },
        cyan: "hsl(185 100% 50%)",
        yellow: "hsl(45 100% 55%)",
        orange: "hsl(25 100% 55%)",
      },
      borderRadius: {
        lg: "1rem",
        md: "calc(1rem - 2px)",
        sm: "calc(1rem - 4px)",
      },
    },
  },
  plugins: [],
}