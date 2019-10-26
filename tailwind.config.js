module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        background: "var(--color-background)"

        /**
         * TOOD: Read more about color token.
         * How's the naming conventions for text on disabled button, etc
         */
      }
    }
  },
  variants: {},
  plugins: []
};
