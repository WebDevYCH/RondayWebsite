// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const fontSizes = [16, 20, 22, 24, 32, 34, 48, 18, 28];

const breakpoints = {
  up: {
    xs: "@media (min-width:0px)",
    sm: "@media (min-width:600px)",
    md: "@media (min-width:960px)",
    lg: "@media (min-width:1280px)",
    xl: "@media (min-width:1920px)",
  },

  down: {
    xs: "@media (max-width:599.95px)",
    sm: "@media (max-width:959.95px)",
    md: "@media (max-width:1279.95px)",
    lg: "@media (max-width:1919.95px)",
    xl: "@media (min-width:0px)",
  },
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const container = {
  width: "calc(100vw - 32px)",
  maxWidth: "1200px",
  margin: "0 auto",
  [breakpoints.up.lg]: {
    maxWidth: "calc(100vw - 48)",
  },
  [breakpoints.up.xl]: {
    width: "calc(100vw - 120px)",
    maxWidth: "1200px",
  },
};

const backdrop = {
  zIndex: "-1",
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
};

const content = {
  borderRadius: "8px",
  marginBottom: "40px",
};

const defaultFont = {
  fontWeight: 300,
  lineHeight: "1.5em",
  fontFamily: "Inter",
};

const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];

const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];

const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];

const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];

const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];

const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];

const greenColor = ["#2cbe9b", "#2A9E82"];

const grayColor = [
  "#F5F5F5",
  "#F0F0F0",
  "#979797",
  "rgba(0, 0, 0, 0.04)",
  "#eee",
  "rgba(0, 0, 0, 0.06)",
  "#e7e7e7",
  "#212121",
  "#ffffff",
  "#535364",
];

const grayRGBA = [
  "rgba(0, 0, 0, 0.04)",
  "rgba(0, 0, 0, 0.06)",
  "rgba(0, 0, 0, 0.08)",
  "rgba(0, 0, 0, 0.6)",
  "rgba(0, 0, 0, 0.8)",
];

const blackColor = "#000";
const whiteColor = "#FFF";

const largeBoxShadow = {
  boxShadow: "0 30px 60px -100px #32325d40, 0 18px 36px -18px #0000004d",
};

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(" +
    hexToRgb(blackColor) +
    ", 0.42), 0 4px 25px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 8px 10px -5px rgba(" +
    hexToRgb(blackColor) +
    ", 0.2)",
};

const primaryBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(" +
    hexToRgb(blackColor) +
    ",.14), 0 7px 10px -5px rgba(" +
    hexToRgb(primaryColor[0]) +
    ",.4)",
};
const infoBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(" +
    hexToRgb(blackColor) +
    ",.14), 0 7px 10px -5px rgba(" +
    hexToRgb(infoColor[0]) +
    ",.4)",
};
const successBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(" +
    hexToRgb(blackColor) +
    ",.14), 0 7px 10px -5px rgba(" +
    hexToRgb(successColor[0]) +
    ",.4)",
};
const warningBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(" +
    hexToRgb(blackColor) +
    ",.14), 0 7px 10px -5px rgba(" +
    hexToRgb(warningColor[0]) +
    ",.4)",
};
const dangerBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(" +
    hexToRgb(blackColor) +
    ",.14), 0 7px 10px -5px rgba(" +
    hexToRgb(dangerColor[0]) +
    ",.4)",
};
const roseBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(" +
    hexToRgb(blackColor) +
    ",.14), 0 7px 10px -5px rgba(" +
    hexToRgb(roseColor[0]) +
    ",.4)",
};

const darkBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(" +
    hexToRgb(blackColor) +
    ",.14), 0 7px 10px -5px rgba(" +
    hexToRgb(grayColor[6]) +
    ",.4)",
};

const warningCardHeader = {
  background:
    "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")",
  ...warningBoxShadow,
};
const successCardHeader = {
  background:
    "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")",
  ...successBoxShadow,
};
const dangerCardHeader = {
  background:
    "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")",
  ...dangerBoxShadow,
};
const infoCardHeader = {
  background:
    "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")",
  ...infoBoxShadow,
};
const primaryCardHeader = {
  background:
    "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")",
  ...primaryBoxShadow,
};
const roseCardHeader = {
  background:
    "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")",
  ...roseBoxShadow,
};
const darkCardHeader = {
  background:
    "linear-gradient(60deg, " + grayColor[6] + ", " + grayColor[5] + ")",
  ...darkBoxShadow,
};

const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[4],
  height: "auto",
  ...defaultFont,
};

const cardSection = {
  borderTop: `2px solid ${grayRGBA[1]}`,
  paddingTop: "24px",
};

const card = {
  ...content,
  width: "100%",
  margin: "auto",
  padding: "24px",
  maxWidth: "760px",
  backgroundColor: grayRGBA[0],
};

const cardHeader = {
  marginBottom: "24px",
  textAlign: "center",
};

const cardBody = {
  ...cardSection,
};

const cardFooter = {
  ...cardSection,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(" +
    hexToRgb(blackColor) +
    ", 0.42), 0 3px 20px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 8px 10px -5px rgba(" +
    hexToRgb(blackColor) +
    ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
};

const iconLightest = {
  fill: "rgba(0, 0, 0, 0.6)",
  fontSize: fontSizes[4],
};

const iconLight = {
  fill: grayRGBA[2],
};

const title = {
  fontWeight: "bold",
  color: blackColor,
  fontSize: fontSizes[6],
  lineHeight: 1.2,
  [breakpoints.down.sm]:{
    fontSize: fontSizes[3],
  }
};

const subTitle = {
  fontWeight: 400,
  fontSize: fontSizes[7],
  color: grayRGBA[3],
  lineHeight: 1.2,
  [breakpoints.up.md]: {
    fontSize: fontSizes[4],
  },
};

const smallTitle = {
  fontWeight: 500,
  fontSize: fontSizes[1],
  color: blackColor,
  lineHeight: 1.5,
  [breakpoints.up.md]: {
    fontSize: "28px",
  },
};

const quote = {
  fontWeight: "Light",
  fontSize: fontSizes[7],
  color: blackColor,
  lineHeight: 1.5,
  [breakpoints.up.xl]: {
    fontSize: fontSizes[8],
  },
};

const text = {
  fontWeight: 400,
  fontSize: fontSizes[0],
  color: grayRGBA[3],
  lineHeight: 1.5,
  [breakpoints.up.lg]: {
    fontSize: fontSizes[7],
  },
};

const source = {
  fontWeight: 400,
  fontSize: fontSizes[0],
  color: grayRGBA[3],
  lineHeight: "normal",
};

const button = {
  padding: "8px 12px",
  width: "fit-content",
  borderRadius: "4px",
  fontFamily: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
  "Arial", sans-serif`,
  fontSize: fontSizes[1],
  textTransform: "none",
  lineHeight: "150%",
  [breakpoints.down.sm]: {
    fontSize: fontSizes[0],
  },
  "&:hover": {
    borderColor: greenColor[0],
    backgroundColor: greenColor[0],
    color: whiteColor,
  },
};

const primaryButton = {
  ...button,
  backgroundColor: greenColor[1],
  color: whiteColor,
};

const buttonLarge = {
  ...button,
  padding: "12px 32px",
};

const cardTitle = {
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: fontSizes[1],
  lineHeight: "19px",
  [breakpoints.up.md]: {    
    fontSize: fontSizes[8],
    lineHeight: "21px",
  }
};

const cardSubtitle = {
  marginTop: "-.375rem",
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem",
  },
};

export {
  hexToRgb,
  //variables
  primaryButton,
  fontSizes,
  drawerWidth,
  transition,
  container,
  boxShadow,
  content,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  grayRGBA,
  blackColor,
  whiteColor,
  greenColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  darkBoxShadow,
  largeBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  darkCardHeader,
  cardActions,
  card,
  cardHeader,
  cardBody,
  cardFooter,
  cardSection,
  defaultBoxShadow,
  title,
  cardTitle,
  cardSubtitle,
  cardLink,
  subTitle,
  quote,
  source,
  smallTitle,
  breakpoints,
  button,
  text,
  iconLight,
  iconLightest,
  backdrop,
  buttonLarge,
};
