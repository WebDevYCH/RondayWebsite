import {
  text,
  title,
  subTitle,
  smallTitle,
  card,
  cardTitle,
  cardBody,
  cardHeader,
  cardFooter,
  cardSection,
  container,
  breakpoints,
  grayRGBA,
  blackColor,
} from "../../ronday-material";

export default {
  text,
  title,
  subTitle,
  smallTitle,
  card,
  cardTitle,
  cardBody,
  cardHeader,
  cardFooter,
  cardSection,
  container: {
    textAlign: "center",
    marginBottom: "24px",
    [breakpoints.up.md]: {
      marginBottom: "48px",
    },
  },
  section: {
    ...container,
    marginTop: "24px",
    paddingBottom: "40px",
    [breakpoints.up.md]: {
      paddingBottom: "80px",
      marginTop: "48px",
    },
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "20px 0 0 0",
    marginTop: "20px",
    borderTop: `2px solid ${grayRGBA[0]}`,
    [breakpoints.up.sm]: {
      flexDirection: "row",
    },
  },
  listKey: {
    ...text,
    color: blackColor,
    fontWeight: "bold",
    maxWidth: "240px",
    marginBottom: "6px",
    [breakpoints.up.lg]: {
      marginBottom: "0px",
    },
  },
  listValue: {
    ...text,
  },
};




