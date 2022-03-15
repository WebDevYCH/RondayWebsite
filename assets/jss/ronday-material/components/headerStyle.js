import {
  breakpoints,
  container,
  title,
  subTitle,
  button,
  greenColor,
  whiteColor,
  fontSizes,
  backdrop,
  grayRGBA,
} from "../../ronday-material";

const headerStyles = {
  backdrop,
  container: {
    ...container,
  },
  headerContainer: {
    margin: "24px auto 120px",
    [breakpoints.up.md]: {
      margin: "48px auto 120px",
    },
  },
  titleContainer: {
    margin: "0 auto 8px",
    maxWidth: "400px",
    [breakpoints.up.md]: {
      maxWidth: "600px",
    },
  },
  subTitleContainer: {
    margin: "0 auto 24px",
    maxWidth: "450px",
    [breakpoints.up.md]: {
      maxWidth: "700px",
    },
  },
  carousel: {
    position: "relative",
    marginTop: "-216px",
    width: "100vw",
    left: "-16px",
    top: "240px",
    backgroundImage: `linear-gradient(${whiteColor}, 30%, #F5F5F5)`,
    [breakpoints.up.md]: {
      marginTop: "-126px",
      left: "0px",
      width: "100%",
    },
  },
  buttonContainer: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    ...button,
    lineHeight: 1,
    borderRadius: "6px",
    margin: "0 8px 0 0",
    padding: "12px 32px",
    whiteSpace: "nowrap",
    backgroundColor: greenColor[1],
    color: whiteColor,
    boxShadow: "none",
    [breakpoints.down.sm]: {
      margin: "0 2px 0 0",
      fontSize: fontSizes[0],
    },
  },
  outlinedButton: {
    ...button,
    lineHeight: 1,
    fontStyle: "normal",
    borderRadius: "6px",
    margin: "0 0 0 8px",
    padding: "12px 32px",
    whiteSpace: "nowrap",
    color: greenColor[1],
    border: `2px solid ${greenColor[1]}`,
    [breakpoints.down.sm]: {
      margin: "0 0 0 2px",
      fontSize: fontSizes[0],
    },
  },
  title: {
    ...title,
    textAlign: "center",
  },
  subTitle: {
    ...subTitle,
    textAlign: "center",
  },
  videoModal: {
    ...container,
    marginTop: "100px",
    textAlign: "right",
    overflow: "hidden",
    [breakpoints.up.sm]: {
      marginTop: "120px",
    },
  },
  videoModalContainer: {
    display: "flex",
    flexDirection: "column",
  },
  videoModalCloseButton: {
    color: whiteColor,
    width: "fit-content",
    marginLeft: "auto",
  },
  videoContainer: {
    borderRadius: "4px",
    overflow: "hidden",
  },
  backDrop: {
    backgroundColor: grayRGBA[4],
  },
};

export default headerStyles;
