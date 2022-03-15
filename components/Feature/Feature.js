import PropTypes from "prop-types";

import useClasses from "../../@ronday/hooks/useClasses";
import defaultStyles from "../../assets/jss/ronday-material/components/featureStyle";

const Feature = ({ title, description, index, styles, children }) => {
  const classes = useClasses(
    typeof styles === "undefined" ? defaultStyles : styles,
    { index }
  );

  return (
    <div className={classes.feature}>
      <div className={classes.featureContent}>
        <p className={classes.smallTitle}>{title}</p>
        <p className={classes.text}>{description}</p>
      </div>
      <div className={classes.childrenContainer}>
        <div className={classes.innerChildContainer}>
          <div className={classes.imageContainer}>{children}</div>
        </div>
      </div>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  styles: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Feature;
