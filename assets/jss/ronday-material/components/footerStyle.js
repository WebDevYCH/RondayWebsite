import {
  container,
  content,
  primaryColor,
  grayRGBA,
  breakpoints,
  button,
  greenColor,
  whiteColor,
  smallTitle,
  text
} from "../../ronday-material";

const footerStyle = {
  title: {
    ...smallTitle,
    ...content,
    marginBottom:"24px"
  },
  logo: {
    margin: "0 auto 12px",
  },
  heart: {
    margin: "0 auto 24px",
    width: "48px",
    height: "48px",
    [breakpoints.up.sm]: {
      margin: "0 auto 40px",
    }
  },
  copyright: {
    textAlign: "center",
    ...text,
    fontSize: "14px",
    [breakpoints.up.lg]: {
      fontSize: "14px",
    },
  },
  copyrightContainer: {
    margin: "0 15px",
    padding: "18px 0 0 0",
    borderTop: `2px solid ${grayRGBA[0]}`,
  },
  footer: {
    position: "relative",
    ...container,
    paddingTop:"80px",
    borderTop: `4px solid ${grayRGBA[1]}`,
    [breakpoints.up.md]: {
      paddingTop: "120px"
    }
  },
  footerSection: {
    ...content,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: "24px"
  },
  mainFooterSection: {
    ...content,
    backgroundColor: grayRGBA[0],
    padding: "20px",
    marginBottom: "20px"
  },
  linkContainer: {
    padding: "0 0 16px 0",
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerButton: {
    ...button,
    backgroundColor: greenColor[1],
    color: whiteColor,
    boxShadow: "none",
    textTransform: "none",
    fontSize: "22px",
    padding: "16px 32px",
    borderRadius: "8px",
    margin: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
    textAlign: "center",
    [breakpoints.down.xs]: {
      '& > :first-child': {
        paddingTop: "0"
      },
      '& > :last-child': {
        paddingBottom: "0",
        borderBottom: "none"
      }
    }
  },
  listItem: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
    margin: "4px 20px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  joinRondayContainer: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [breakpoints.up.md]: {
      marginBottom: "80px",
    },
  },
};

export default footerStyle;
