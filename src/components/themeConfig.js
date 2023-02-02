const themeConfig = {
  colorScheme: "light",
  colors: {
    grey: ["#FFFFFF", "#E1E1E1", "#A6A6A6", "#6B6B6B"],
    black: ["#949494", "#858585", "#3B3B3B", "#010101"],
    creamy: ["#FFF5EA", "#FFDDBA", "#E9C095", "#E9C095"],
    red: ["#FFF8F8", "#F5C6C6", "#DD4A4A"],
    violet: ["#B0ADC4", "#413C66", "#27243D"],
  },
  white: "#FFFFFF",
  black: "#010101",
  primaryColor: "violet",
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 20,
    xl: 24,
    xxl: 28,
  },
  fontFamily: "Lora, Helvetica, sans-serif",
  headings: {
    fontFamily:
      "Lora, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    sizes: {
      display1: {
        fontFamily: "Lora",
        fontSize: 60,
        lineHeight: 58.8,
        fontWeight: 400,
      },
      display2: {
        fontFamily: "Lora",
        fontSize: 60,
        lineHeight: 60,
        fontWeight: 400,
        fontStyle: "italic",
      },
      h1: {
        fontFamily: "Lora",
        fontSize: 46,
        lineHeight: 55.2,
        fontWeight: 400,
      },
      h2: {
        fontFamily: "Lora",
        fontSize: 34,
        lineHeight: 37.4,
        fontWeight: 400,
      },
      h3: {
        fontFamily: "Helvetica",
        fontSize: 24,
        lineHeight: 28.8,
        fontWeight: 400,
      },
      h4: {
        fontFamily: "Helvetica",
        fontSize: 18,
        lineHeight: 27,
        fontWeight: 400,
      },
      body: {
        fontFamily: "Helvetica",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 400,
      },
      caption: {
        fontFamily: "Helvetica",
        fontSize: 12,
        lineHeight: 18,
        fontWeight: 400,
        fontAlign: "center",
      },
    },
  },
};

export default themeConfig;
