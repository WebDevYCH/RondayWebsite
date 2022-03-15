import {
  breakpoints,
  container,
  smallTitle,
  primaryButton,
  card,
  cardHeader,
  cardBody,
  cardFooter,
} from "../../ronday-material";

export default {
  container: {
    ...container,
    display: "flex",
    flexDirection: "column",
  },
  card: {
    ...card,
    marginBottom: "0"
  },
  cardHeader,
  cardBody,
  cardFooter: {
    ...cardFooter,
    [breakpoints.up.lg]: {
      textAlign: "left",
    },
    [breakpoints.down.sm]: {
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        marginBottom: "16px",
      },
      "& > :last-child": {
        marginBottom: "0",
      },
    },
  },
  smallTitle,
  button: {
    ...primaryButton,
    padding: "12px 32px",
    height: "fit-content",
  },
  formGroupContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    "& > *": {
      width: "100%",
      margin: "0",
    },
    [breakpoints.up.sm]: {
      flexDirection: "row",
      "& > *": {
        display: "inline",
        width: "calc(50% - 12px)",
        margin: "0 12px",
      },
      "& > :first-child": {
        marginLeft: "0",
      },
      "& > :last-child": {
        marginRight: "0",
      },
    },
  },
  inputGroup: {
    marginBottom: "24px",
  },
  label: {
    marginBottom: "6px",
  },
  input: {
    borderRadius: "4px",
    backgroundColor: "white",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderSize: "1px",
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderWidth: "1px",
        borderColor: "black",
      },
    },
  },
};
