import useClasses from "../../@ronday/hooks/useClasses";
import shortcuts from "../../assets/content/keyboard-shortcuts";
import styles from "../../assets/jss/ronday-material/components/keyboardShortcutsStyle";

const KeyboardShortcuts = () => {
  const classes = useClasses(styles);

  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h3 className={classes.smallTitle}>Basic Controls & Useful Hotkeys</h3>
      </div>
      <ul>
        {shortcuts.map((s, i) => (
          <li key={i} className={classes.listItem}>
            <div className={classes.description}>{s.description}</div>
            <div className={classes.shortcut}>{s.shortcut}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyboardShortcuts;
