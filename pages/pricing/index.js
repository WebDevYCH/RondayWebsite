import Head from "next/head";

import useClasses from "../../@ronday/hooks/useClasses";
import pricing from "../../assets/content/pricing";
import styles from "../../assets/jss/ronday-material/components/pricingStyle";

const Pricing = () => {
  const classes = useClasses(styles);
  return (
    <>
      <Head>
        <title>Ronday - Pricing</title>
        <meta name="description" content="Ronday - Pricing" />
      </Head>
      <section className={classes.section}>
        <div className={classes.container}>
          <h1 className={classes.title}>Pricing</h1>
          <p className={classes.subTitle}>Ronday is currently in closed beta</p>
        </div>
        {pricing.map((p, i) => (
          <div key={i} className={classes.card}>
            <div className={classes.cardHeader}>
              <h2 className={classes.cardTitle}>{p.name}</h2>
            </div>
            <div>
              <ul>
                {p.options.map((o, i) => (
                  <li key={i} className={classes.listItem}>
                    <div className={classes.listKey}>{o.name}</div>
                    <div className={classes.listValue}>{o.value}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Pricing;
