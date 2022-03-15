import { useCallback } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CloseIcon from "@material-ui/icons/Close";

import useClasses from "../../../@ronday/hooks/useClasses";
import styles from "../../../assets/jss/ronday-material/components/snackStyles";

const Snack = ({
  open,
  handleDismiss,
  message,
  autoHideDuration = 6000,
  status = "none",
  direction = "up",
  anchorOrigin = { vertical: "bottom", horizontal: "left" },
}) => {
  const classes = useClasses(styles);

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleDismiss}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const transition = useCallback(
    function TransitionUp(props) {
      return <Slide {...props} direction={direction} />;
    },
    [direction]
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      onClose={handleDismiss}
      TransitionComponent={transition}
      key={transition.name}
    >
      <SnackbarContent
        className={classes[status]}
        message={message}
        action={action}
      />
    </Snackbar>
  );
};

Snack.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDismiss: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  autoHideDuration: PropTypes.number,
  status: PropTypes.string,
  direction: PropTypes.string,
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
};

export default Snack;
