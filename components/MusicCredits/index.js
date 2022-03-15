import useClasses from "../../@ronday/hooks/useClasses";
import styles from "../../assets/jss/ronday-material/components/musicCreditStyle";

export const MusicCredits = () => {
  const classes = useClasses(styles);
  return (
    <div className={classes.container}>
      Music:{" "}
      <a
        href="https://lnk.to/chimneyswifts"
        target="_blank"
        rel="noopener noreferrer"
      >
        Brad Kolodner Chimney Swifts (2021)
      </a>
    </div>
  );
};
