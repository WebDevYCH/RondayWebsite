import PropTypes from "prop-types";

import { useClasses } from "../../@ronday/hooks";
import StringUtils from "../../@ronday/utils/StringUtils";
import styles from "../../assets/jss/ronday-material/components/reviewStyle";

const Review = ({ review: { statement, name, role, company } }) => {
  const classes = useClasses(styles);

  const getAuthorName = (name) => (StringUtils.isEmpty(name) ? "" : `${name} `);

  return (
    <div className={classes.review}>
      <blockquote className={classes.statement}>
        <p>{statement}</p>
      </blockquote>
      <div className={classes.name}>
        {`- ${getAuthorName(name)}${role} at ${company}`}
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    statement: PropTypes.string.isRequired,
    name: PropTypes.string,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
