import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useFormikContext } from "formik";

import useClasses from "../../../@ronday/hooks/useClasses";
import styles from "../../../assets/jss/ronday-material/components/formButtonStyle";

const FormikButton = ({ children, ...rest }) => {
  const { isSubmitting } = useFormikContext();
  const classes = useClasses(styles);

  return (
    <Button {...rest} disabled={isSubmitting}>
      {children}
      {isSubmitting && (
        <CircularProgress className={classes.spinner} size={20} />
      )}
    </Button>
  );
};

FormikButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormikButton;
