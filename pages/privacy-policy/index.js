import Head from "next/head";
import PropTypes from "prop-types";

import useClasses from "../../@ronday/hooks/useClasses";
import {
  getParsedMarkdownFile,
  markdownToHTML,
} from "../../@ronday/lib/markdown";

import styles from "../../assets/jss/ronday-material/components/privacyStyle";

const PrivacyPolicy = ({ statement }) => {
  const classes = useClasses(styles);

  return (
    <>
      <Head>
        <title>Ronday - Privacy Policy</title>
        <meta name="description" content="Ronday - Privacy Policy" />
      </Head>

      <section className={classes.section}>
        <div className={classes.content}>
          <h1 className={classes.title}>Privacy Policy</h1>
          <p className={classes.source}>Last updated: August 11, 2021</p>
        </div>
        <div
          className={classes.textContainer}
          dangerouslySetInnerHTML={{ __html: statement }}
        ></div>
      </section>
    </>
  );
};

PrivacyPolicy.propTypes = {
  statement: PropTypes.string.isRequired,
};

export const getStaticProps = async () => {
  const { content } = getParsedMarkdownFile("privacy-policy");
  const statement = await markdownToHTML(content);

  return {
    props: {
      statement,
    },
  };
};

export default PrivacyPolicy;
