
const palette = {

  teal: {
    50: '#e0f2ef',
    100: '#b3e0d6',
    200: '#80ccbb',
    300: '#4db8a0',
    400: '#26a88b',
    500: '#007356',
    600: '#00664d',
    700: '#005642',
    800: '#004636',
    900: '#002e24',
  },

  gray: {
    0: '#ffffff',
    50: '#f8f9fa',
    100: '#f1f3f5',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#868e96',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },

  red: {
    50: '#fff5f5',
    100: '#ffe3e3',
    200: '#ffc9c9',
    300: '#ffa8a8',
    400: '#ff8787',
    500: '#ff6b6b',
    600: '#fa5252',
    700: '#f03e3e',
    800: '#e03131',
    900: '#c92a2a',
  },
};

const theme = {
  colors: {
    primary: palette.teal[500],
    primaryLight: palette.teal[400],
    primaryDark: palette.teal[700],

    background: palette.gray[800],
    backgroundLight: palette.gray[100],
    backgroundDark: palette.gray[900],

    buttonColor: palette.gray[600],
    buttonHover: palette.gray[700],
    buttonLight: palette.gray[500],

    text: palette.gray[800],
    textLight: palette.gray[600],
    grayText: palette.gray[500],
    lightText: palette.gray[0],

    removeIcon: palette.red[600],
  },

  palette,
};

export default theme;