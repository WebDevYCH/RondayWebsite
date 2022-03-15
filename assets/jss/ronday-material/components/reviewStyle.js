import {
  breakpoints,
  container,
  grayRGBA,
  quote,
  source,
  title,
  content,
} from "../../ronday-material";

const reviewStyles = {
  title: {
    ...title,
    textAlign: "center",
    marginBottom: "24px",
    [breakpoints.up.sm]: {
      margin: "40px 0"
    },
    [breakpoints.up.md]: {
      margin: "64px 0"
    },
  },
  statement: {
    ...quote,
    marginBottom: "24px",
  },
  name: {
    ...source,
  },
  container,
  review: {
    margin: "0 auto",
    minHeight: "447px",
    [breakpoints.up.sm]: {
      minHeight: "258px"
    },
    [breakpoints.up.xl]: {
      minHeight: "420px"
    }
  },
  innerContainer: {
    ...content,
    maxWidth: "550px",
    margin: "auto",
    marginBottom: "0px",
    borderRadius: "0px",
    [breakpoints.up.lg]:{
      maxWidth: "760px"
    },
    [breakpoints.up.sm]:{
      borderTop: `4px solid ${grayRGBA[1]}`,
    }
  },
  reviewsContainer: {
    paddingTop: "200px",
    backgroundColor: grayRGBA[0],
    paddingBottom: "40px",
    marginBottom: "120px",
  },
};

export default reviewStyles;
