export const BREAKPOINTS = {
  phone: 500,
  laptop: 1300,
};

export const WEIGHTS = {
  normal: 400,
  bold: 700,
};

export const COLORS = {
  lightCyan: "hsl(193, 38%, 86%)",
  neonGreen: "hsl(150, 100%, 66%)",
  grayishBlue: "hsl(217, 19%, 38%)",
  darkGrayishBlue: "hsl(217, 19%, 24%)",
  darkBlue: "hsl(218, 23%, 16%)",
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
