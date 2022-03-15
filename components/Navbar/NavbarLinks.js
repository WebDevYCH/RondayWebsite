import PropTypes from 'prop-types';
import clsx from "clsx";

import Button from "@material-ui/core/Button";

import NavLink from "./NavLink";
import useClasses from "../../@ronday/hooks/useClasses";
import download from "../../@ronday/download";
import styles from "../../assets/jss/ronday-material/components/navStyle";

const NavbarLinks = ({ onClick, linkClass }) => {
  const classes = useClasses(styles);

  const handleDownload = (e) => {
    e.preventDefault()
    download();
    onClick();
  };

  return (
    <>
      <li className={linkClass}>
        <NavLink activeClassName={classes.navbarLinkActive} href={"/pricing"}>
          <a onClick={onClick}>Pricing</a>
        </NavLink>
      </li>

      <li className={linkClass}>
        <NavLink activeClassName={classes.navbarLinkActive} href={"/"}>
          <a onClick={handleDownload}>Download</a>
        </NavLink>
      </li>

      <li className={linkClass}>
        <NavLink
          activeClassName={classes.navbarLinkActive}
          href={"https://admin.rondayapp.com/Home"}
        >
          <a onClick={onClick}>Sign In</a>
        </NavLink>
      </li>

      <li className={classes.listItem}>
        <Button
          className={`${clsx(linkClass, classes.button)} waitlist-btn`}
          href="https://forms.gle/2PfqTHoZ5HGXiShB7"
          target="_blank"
          rel="noreferrer"
          variant="outlined"
        >
          Get Ronday!
        </Button>
      </li>
    </>
  );
};

NavbarLinks.propTypes = {
  onClick: PropTypes.func,
  linkClass: PropTypes.string
}

export default NavbarLinks;
