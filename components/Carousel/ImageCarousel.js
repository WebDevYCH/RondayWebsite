import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

import CarouselIndicator from "./CarouselIndicator";
import { useClasses } from "../../@ronday/hooks";
import styles from "../../assets/jss/ronday-material/components/carouselStyle";

const interval = 5000;

const ImageCarousel = ({ items, className }) => {
  const classes = useClasses(styles);
  const [activeIndex, setActiveIndex] = useState(0);
  const [initial, setInitial] = useState(true);

  function handleItemChange(e) {
    initial && setInitial(false);
    activeIndex !== e && setActiveIndex(e);
  }

  function isActiveIndex(i) {
    return i === activeIndex;
  }

  function goToSlide(i) {
    if (isActiveIndex(i)) {
      let newIndex = i + 1;
      setActiveIndex(newIndex > items.length - 1 ? 0 : newIndex);
    }
  }

  function renderItem(i) {
    let name = "indicator";

    if (i === 0) {
      name = "firstIndicator";
    } else if (i === items.length) {
      name = "lastIndicator";
    }

    return (
      <CarouselIndicator
        key={i}
        name={name}
        index={i}
        goToSlide={goToSlide}
        active={isActiveIndex(i)}
        initial={initial}
        interval={interval}
      />
    );
  }

  return (
    <div className={className}>
      <Carousel
        interval={interval}
        indicators={false}
        autoPlay={false}
        timeout={500}
        index={activeIndex}
        swipe={true}
        animation="slide"
        onChange={handleItemChange}
      >
        {items.map((item, i) => {
          return (
          <Image
            key={i}
            className={classes.image}
            placeholder="blur"
            src={item.src}
            priority={true}
            alt={item.alt}
            layout="responsive"
            blurDataURL={item.placeholder}
          />
        )})}
      </Carousel>
      <div className={classes.indicatorContainer}>
        {items.map((_, i) => renderItem(i))}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.object,
      alt: PropTypes.string,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string
};

export default ImageCarousel;
