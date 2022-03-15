import {
  title,
  text,
  smallTitle,
  breakpoints,
} from "../../ronday-material";

export default {
  title,
  smallTitle: {
    ...smallTitle,
    marginBottom: "8px",
  },
  text,
  featureContent: {
    maxWidth: "400px",
    padding: (props) => (props.index % 2 != 0 ? "0 0 0 40px" : "0 40px 0 0"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [breakpoints.down.sm]: {
      marginBottom: "24px",
      padding: "0px !important",
      maxWidth: "100%",
    },
  },
  feature: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: (props) => (props.index % 2 != 0 ? "row-reverse" : "row"),
    marginBottom: "240px",
    [breakpoints.down.sm]: {
      flexDirection: "column !important",
      marginBottom: "80px",
    },
  },
  childrenContainer: {
    width: "100%",
  },
};
