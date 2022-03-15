import {
  title,
  text,
  source,
  container,
  content,
  card,
  breakpoints,
  grayRGBA,
} from "../../ronday-material";

export default {
  title: {
    ...title,
    marginBottom: "8px",
    [breakpoints.up.md]: {
      marginBottom: "24px",
    },
  },
  source,
  text,
  container,
  section: {
    ...container,
    marginTop: "24px",
    paddingBottom: "40px",
    [breakpoints.up.md]: {
      paddingBottom: "80px",
      marginTop: "48px",
    },
  },
  content: {
    textAlign: "center",
    ...content,
    [breakpoints.up.md]: {
      marginBottom: "60px",
    },
  },
  textContainer: {
    ...card,
    paddingTop: "0px",
    paddingBottom: "0px",
    backgroundColor: "transparent",
    "& > p": {
      ...text,
      "& > strong": {
        fontSize: "20px",
      },
    },
    "& > h2": {
      color: grayRGBA[3],
      margin: "24px 0 20px",
      fontSize: "24px",
      fontWeight: "bolder"
    },
    "& > h3": {
      color: grayRGBA[3],
      margin: "24px 0 0",
      fontSize: "24px",
      fontWeight: "bolder"
    },
    "& > h4": {
      color: grayRGBA[3],
      margin: "24px 0 0",
      fontSize: "20px",
      fontWeight: "bolder"
    },

    "& > ul": {
      paddingLeft: "20px",
      listStyle: "disc",
      ...text,
      margin: "0 0 20px"
    },
    "& > ul > li > ul": {
      listStyle: "circle",
      paddingLeft: "20px",
    },
    "& > ul > li > ul > li > ul": {
      listStyle: "disc",
      paddingLeft: "20px",
    }
  },
};
