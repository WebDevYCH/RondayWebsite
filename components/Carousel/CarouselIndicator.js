import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import ProgressBar from "@ramonak/react-progress-bar";

import useClasses from "../../@ronday/hooks/useClasses";
import styles from "../../assets/jss/ronday-material/components/carouselStyle";

const CarouselIndicator = ({
  active,
  initial,
  name,
  goToSlide,
  index,
  interval,
}) => {
  const increment = 100 / (interval / 1000);
  const [value, setValue] = useState(initial ? 0 : increment);
  const classes = useClasses(styles);

  useEffect(() => {
    !active && setValue(increment);

    const interval = setInterval(() => {
      active && setValue((old) => old + increment);
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    value > 100 && goToSlide(index);
  }, [value]);

  return (
    <div title="progress-bar" className={classes[name]}>
      <ProgressBar
        height="4px"
        bgColor="#979797"
        role="progressbar"
        title="image-progressbar"
        completed={active ? value : 0}
        isLabelVisible={false}
        transitionDuration=".5s"
        transitionTimingFunction="ease-in-out"
      />
    </div>
  );
};

CarouselIndicator.propTypes = {
  active: PropTypes.bool,
  initial: PropTypes.bool,
  name: PropTypes.string,
  goToSlide: PropTypes.func,
  index: PropTypes.number,
  interval: PropTypes.number,
};

export default CarouselIndicator;
