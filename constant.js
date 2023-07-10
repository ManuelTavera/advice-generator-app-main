export const BREAKPOINTS = {
  phone: 860,
  laptop: 1300,
};

export const WEIGHTS = {
  normal: 400,
  bold: 700,
};

export const COLORS = {
  darkCyan: "hsl(185, 75%, 39%)",
  desaturatedBlue: "hsl(229, 23%, 23%)",
  grayishBlue: "hsl(227, 10%, 46%)",
  darkGray: "hsl(0, 0%, 59%)",
  lightCyan: "hsl(193, 38%, 86%)",
  neonGreen: "hsl(150, 100%, 66%)",
  darkBlueTwo: "hsl(228, 15%, 26%)"
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
