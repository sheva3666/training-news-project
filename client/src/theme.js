const theme = {
  font: {
    primary: "'Open Sans', sans-serif",
    secondary: "'Pacifico', cursive",

    sizes: {
      desktop: {
        h1: 60,
        h2: 48,
        h3: 36,
        h4: 30,
        h5: 24,
        h6: 18,
        paragraph: 16,
      },
    },
    lineHeight: {
      desktop: {
        auto: "auto",
      },
    },

    weight: {
      bold: 700,
      regular: 400,
      light: 300,
    },
  },

  shape: {
    radius: 15,
  },

  colors: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
  },

  transitions: {
    default: "300ms all ease-in-out",
  },

  container: {
    maxWidth: "1200px",
  },
};

export default theme;
