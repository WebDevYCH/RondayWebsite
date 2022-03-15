import Image from "next/image";

import Feature from "../Feature/Feature";
import useClasses from "../../@ronday/hooks/useClasses";
import features from "../../assets/content/features";
import styles from "../../assets/jss/ronday-material/components/featureSectionStyle";

const Features = () => {
  const classes = useClasses(styles);
  return (
    <section className={classes.section}>
      <div className={classes.innerContainer}>
        <h2 className={classes.title}>Ronday Features</h2>
        {features.map((f, i) => (
          <Feature
            styles={styles}
            index={i}
            key={i}
            title={f.title}
            description={f.description}
          >
            <div className={classes.imageContainer}>
              <Image
                src={f.image.src}
                blurDataURL={f.image.placeholder}
                placeholder="blur"
                alt={f.image.alt}
              />
            </div>
          </Feature>
        ))}
      </div>
    </section>
  );
};

export default Features;
