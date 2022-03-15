import { title, container, content, breakpoints } from "../../ronday-material";

const aboutStyles = {
  container,
  content,
  title: {
    ...title,
    marginBottom: "80px",
    textAlign: "center",
    [breakpoints.up.lg]: {
      marginBottom: "160px",
    },
  },
};

export default aboutStyles;
