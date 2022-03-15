import Feature from "../Feature/Feature";
import ImageCarousel from "../Carousel/ImageCarousel";
import useClasses from "../../@ronday/hooks/useClasses";
import about from "../../assets/content/about.js";
import styles from "../../assets/jss/ronday-material/components/aboutSectionStyle";

const About = () => {
  const classes = useClasses(styles);

  return (
    <section>
      <div className={classes.container}>
        <h2 className={classes.title}>What&apos;s unique about Ronday?</h2>
        {about.map((a, i) => (
          <Feature
            key={i}
            index={i}
            title={a.title}
            description={a.description}
          >
            <ImageCarousel items={a.images} />
          </Feature>
        ))}
      </div>
    </section>
  );
};

export default About;
