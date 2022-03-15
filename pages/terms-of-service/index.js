import Head from "next/head";
import PropTypes from "prop-types";

import useClasses from "../../@ronday/hooks/useClasses";
import {
  getParsedMarkdownFile,
  markdownToHTML,
} from "../../@ronday/lib/markdown";

import styles from "../../assets/jss/ronday-material/components/tosStyle";

const TermsOfService = ({ statement }) => {
  const classes = useClasses(styles);

  return (
    <>
      <Head>
        <title>Ronday - Terms of Service</title>
        <meta name="description" content="Ronday - Terms of Service" />
      </Head>
      <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h1 className={classes.title}>Terms of Service</h1>
            <p className={classes.source}>Last Updated : May 10, 2021</p>
          </div>
          <div
            className={classes.textContainer}
            dangerouslySetInnerHTML={{ __html: statement }}
          ></div>
        </div>
      </section>
    </>
  );
};

TermsOfService.propTypes = {
  statement: PropTypes.string.isRequired,
};

export const getStaticProps = async () => {
  const { content } = getParsedMarkdownFile("terms-of-service");
  const statement = await markdownToHTML(content);

  return {
    props: {
      statement,
    },
  };
};

export default TermsOfService;
