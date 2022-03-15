import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import ReCAPTCHA from "react-google-recaptcha";
import { useFormikContext } from "formik";

import styles from "../../../assets/jss/ronday-material/components/recaptchaStyle";
import useClasses from "../../../@ronday/hooks/useClasses";

const FormikReCAPTCHA = ({ name, clear }) => {
  const { touched, errors, setFieldValue } = useFormikContext();
  const classes = useClasses(styles);
  const ref = useRef();

  const onChange = (value) => {
    setFieldValue(name, value);
  };

  useEffect(() => {
    if (clear) {
      ref.current.reset();
    }
  }, [clear, ref]);

  return (
    <div className={classes.container}>
      <ReCAPTCHA
        size="normal"
        ref={ref}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onChange}
      />
      {touched[name] && errors[name] && (
        <div className={classes.errorContainer}>{errors[name]}</div>
      )}
    </div>
  );
};

FormikReCAPTCHA.propTypes = {
  name: PropTypes.string.isRequired,
  clear: PropTypes.bool.isRequired,
};

export default FormikReCAPTCHA;
