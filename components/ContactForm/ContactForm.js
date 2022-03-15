import { useState } from "react";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormGroup, InputLabel } from "@material-ui/core";

import ReCAPTCHA from "../FormUI/ReCAPTCHA";
import Button from "../FormUI/Button";
import TextFieldWrapper from "../FormUI/TextField";
import Snack from "../FormUI/Snack/Snack";

import useClasses from "../../@ronday/hooks/useClasses";
import styles from "../../assets/jss/ronday-material/components/formStyle";

const ContactForm = () => {
  const classes = useClasses(styles);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [snackStatus, setSnackStatus] = useState({
    open: false,
    status: null,
    message: "",
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter a valid email"),
    subject: Yup.string()
      .required("Please enter a subject")
      .min(3, "Please enter a subject more than 3 character"),
    message: Yup.string()
      .required("Please enter a message")
      .max(800, "Message must not exceed 800 characters")
      .min(10, "Please enter a message more than 10 character"),
    recaptcha: Yup.string()
      .nullable()
      .required("Please complete the Captcha above"),
  });

  const onReset = () => setIsSubmitted(false);

  const handleDismiss = () => setSnackStatus({ ...snackStatus, open: false });

  const onSubmit = async (values, { resetForm }) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status >= 200 && response.status < 300) {
      setIsSubmitted(true);
      setSnackStatus({
        open: true,
        status: "success",
        message: `\u{1F60A} Message received! \u{1F48C} Thank you!`,
      });
      // clear form
      resetForm();
      return;
    }

    setIsSubmitted(false);
    setSnackStatus({
      open: true,
      status: "error",
      message: `\u{1F625} Error sending message. Pleas try again.`,
    });
  };

  return (
    <div className={classes.container}>
      <Snack
        open={snackStatus.open}
        status={snackStatus.status}
        direction="right"
        handleDismiss={handleDismiss}
        message={snackStatus.message}
      />

      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
        onReset={onReset}
      >
        <Form action="" method="post" noValidate={true}>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
              <h3 className={classes.smallTitle}>Contact Us</h3>
            </div>
            <div className={classes.cardBody}>
              <FormGroup row className={classes.formGroupContainer}>
                <div className={classes.inputGroup}>
                  <InputLabel id="name-label" className={classes.label}>
                    Name
                  </InputLabel>
                  <TextFieldWrapper
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    labelid="name-label"
                    placeholder="Name"
                    name="name"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div className={classes.inputGroup}>
                  <InputLabel id="email-label" className={classes.label}>
                    Email
                  </InputLabel>
                  <TextFieldWrapper
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    labelid="email-label"
                    placeholder="john@doe.com"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </FormGroup>
              <FormGroup className={classes.inputGroup}>
                <InputLabel id="subject-label" className={classes.label}>
                  Subject
                </InputLabel>
                <TextFieldWrapper
                  className={classes.input}
                  variant="outlined"
                  labelid="subject-label"
                  placeholder="Subject"
                  required
                  name="subject"
                  id="subject"
                />
              </FormGroup>
              <FormGroup className={classes.inputGroup}>
                <InputLabel id="message-label" className={classes.label}>
                  Message ({messageLength} of 800 characters)
                </InputLabel>
                <TextFieldWrapper
                  className={classes.input}
                  multiline
                  rows={6}
                  variant="outlined"
                  onChange={(val) => setMessageLength(val.length)}
                  labelid="message-label"
                  placeholder="Message"
                  name="message"
                  id="message"
                  required
                />
              </FormGroup>
            </div>
            <div className={classes.cardFooter}>
              <ReCAPTCHA name="recaptcha" clear={isSubmitted} />
              <Button type="submit" className={classes.button}>
                Send Email
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
