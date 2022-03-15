import {
  card,
  cardHeader,
  cardBody,
  breakpoints,
  smallTitle,
  grayRGBA,
  text,
  blackColor,
} from "../../ronday-material";

export default {
  smallTitle,
  card,
  cardHeader,
  cardBody,
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "20px 0",
    borderTop: `2px solid ${grayRGBA[0]}`,
    [breakpoints.up.sm]: {
      flexDirection: "row",
    },
  },
  description: {
    ...text,
    color: blackColor,
    fontWeight: "bold",
    maxWidth: "240px",
    marginBottom: "6px",
    [breakpoints.up.lg]: {
      marginBottom: "0px",
    },
  },
  shortcut: {
    ...text,
  },
};
