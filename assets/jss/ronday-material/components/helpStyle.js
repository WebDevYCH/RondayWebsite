import {
  container,
  breakpoints,
  title,
} from "../../ronday-material";

const styles = {
  section: {
    marginTop: "24px",
    marginBottom: "80px",
    [breakpoints.up.md]: {
      marginBottom: "120px",
    },
    [breakpoints.up.lg]: {
      marginTop: "48px",
    },
  },
  container: {
    ...container,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    ...title,
    textAlign: "center",
    marginBottom: "24px",
    [breakpoints.up.lg]: {
      marginBottom: "64px",
    },
  },
};

export default styles;
