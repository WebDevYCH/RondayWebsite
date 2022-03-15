import { breakpoints } from "../../ronday-material";

const carouselStyles = {
  image: {
    borderRadius: "4px 4px 0 0",
    width: "100%",
  },
  indicatorContainer: {
    display: "flex",
    width: "calc(100vw - 32px)",
    margin: "auto",
    justifyContent: "space-between",
    marginTop: "4px",
    [breakpoints.up.md]: {
      width: "100%",
    },
  },
  firstIndicator: {
    width: "100%",
    margin: "0 2px 0 0",
  },
  lastIndicator: {
    width: "100%",
    margin: "0 0 0 2px",
  },
  indicator: {
    width: "100%",
    margin: "0 2px",
  },
};

export default carouselStyles;
