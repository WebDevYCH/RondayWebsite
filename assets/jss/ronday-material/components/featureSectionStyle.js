import {
  title,
  text,
  container,
  breakpoints,
  smallTitle,
  grayRGBA,
} from "../../ronday-material";

export default {
  section: {
    overflowX: "hidden",
  },
  title: {
    textAlign: "center",
    ...title,
    marginBottom: "80px",
    maxWidth: "calc(100vw - 40px)",
    [breakpoints.up.sm]: {
      marginBottom: "120px",
      maxWidth: "100%",
    },
  },
  text,
  container: {
    ...container,
    minWidth: "760px",
    position: "relative",
    paddingTop: "80px",
    [breakpoints.up.sm]: {
      paddingTop: "120px",
    },
  },
  innerContainer: {
    paddingTop: "80px",
    borderTop: `4px solid ${grayRGBA[1]}`,
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "flex-start",
    maxWidth: "550px",
    "& > :last-child": {
      marginBottom: "80px",
    },
    [breakpoints.up.lg]: {
      maxWidth: "760px",
    },
    [breakpoints.up.md]: {
      "& > :last-child": {
        marginBottom: "120px",
      },
    },
    [breakpoints.down.sm]: {
      maxWidth: "calc(100vw - 40px)",
    },
    [breakpoints.up.sm]: {
      paddingTop: "120px",
    },
  },
  smallTitle: {
    ...smallTitle,
    marginBottom: "16px",
  },
  feature: {
    display: "flex",
    flexDirection: (props) => (props.index % 2 != 0 ? "row-reverse" : "row"),
    marginBottom: " 240px",
    justifyContent: "center",
    alignSelf: "center",
    width: "150%",
    [breakpoints.down.md]: {
      marginBottom: "120px",
    },
    [breakpoints.down.sm]: {
      marginBottom: "80px",
      width: "150%",
      justifyContent: "flex-start",
      marginLeft: (props) =>
        props.index % 2 != 0 ? "0px" : "calc((100vw - 90%))",
      marginRight: (props) =>
        props.index % 2 != 0 ? "calc((100vw - 90%))" : "0px",
      alignSelf: (props) => (props.index % 2 != 0 ? "self-end" : "self-start"),
    },
    [breakpoints.down.xs]: {
      flexDirection: "column !important",
      marginLeft: "0px !important",
      marginRight: "0px !important",
      marginBottom: "80px !important",
      width: "100%",
      alignSelf: "auto !important",
    },
  },
  featureContent: {
    margin: (props) => (props.index % 2 != 0 ? "0 0 0 40px" : "0 40px 0 0"),
    maxWidth: "360px",
    minWidth: "360px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [breakpoints.down.sm]: {
      maxWidth: "250px !important",
      minWidth: "250px !important",
    },
    [breakpoints.down.xs]: {
      textAlign: "center",
      margin: "0 0 16px 0 !important",
      padding: "0px !important",
      maxWidth: "100% !important",
      minWidth: "100% !important",
    },
  },
  childrenContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: `${grayRGBA[0]}`,
    borderRadius: (props) => (props.index % 2 === 0 ? "8px" : "50%"),
    overflow: "show",
    width: "460px",
    height: "460px",
    maxWidth: "460px",
    maxHeight: "460px",
    minWidth: "460px",
    minHeight: "460px",
    [breakpoints.down.xs]: {
      padding: "0px !important",
      height: "calc(100vw  - 32px)",
      width: "calc(100vw  - 32px)",
      maxWidth: "calc(100vw  - 32px)",
      maxHeight: "calc(100vw  - 32px)",
      minWidth: "calc(100vw  - 32px)",
      minHeight: "calc(100vw  - 32px)",
      alignSelf: "center",
    },
  },
  imageContainer: {
    margin: "auto",
    display: "flex",
    [breakpoints.down.xs]: {
      width: (props) => (props.index < 4 ? "" : "95%"),
    },
  },
  innerChildContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "16px",
    height: "100%",
    borderRadius: "40px",
  },
};
