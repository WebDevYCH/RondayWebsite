import { breakpoints, text } from "../../ronday-material";

export default {
  container: {
    ...text,
    fontSize: "12px",
    textAlign: "center",
    margin: "24px 0",
    [breakpoints.up.lg]: {
      fontSize: "12px",
    },
    "& > a": {
      textDecoration:"underline"
    }
  },
};
