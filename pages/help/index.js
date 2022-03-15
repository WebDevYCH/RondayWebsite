import Head from "next/head";

import ContactForm from "../../components/ContactForm/ContactForm";
import KeyboardShortcuts from "../../components/KeyboardShortkuts/KeyboardShortcuts";

import useClasses from "../../@ronday/hooks/useClasses";
import styles from "../../assets/jss/ronday-material/components/helpStyle";

const Help = () => {
  const classes = useClasses(styles);

  return (
    <>
      <Head>
        <title>Ronday - Help</title>
        <meta name="description" content="Ronday - Help" />
      </Head>
      <section className={classes.section}>
        <div className={classes.container}>
          <h2 className={classes.title}>Help</h2>
          <KeyboardShortcuts />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Help;
