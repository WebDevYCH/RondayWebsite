import Carousel from "react-material-ui-carousel";
import Review from "../Review/Review";
import useClasses from "../../@ronday/hooks/useClasses";
import reviews from "../../assets/content/reviews";
import styles from "../../assets/jss/ronday-material/components/reviewStyle";

const Reviews = () => {
  const classes = useClasses(styles);

  return (
    <section className={classes.reviewsContainer}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h2 className={classes.title}>What people are saying</h2>
          <Carousel
            navButtonsAlwaysInvisible={true}
            interval={5000}
            swipe={true}
          >
            {reviews.map((r, i) => (
              <Review key={i} review={r} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
