import PropTypes from "prop-types";

import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextFieldWrapper = ({ name, onChange, ...rest }) => {
  const [field, meta] = useField(name);

  const config = {
    ...rest,
    ...field,
    error: null,
    helperText: null,
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  if (typeof onChange === "function") {
    onChange(field.value);
  }

  return <TextField {...config} />;
};

TextFieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TextFieldWrapper;
