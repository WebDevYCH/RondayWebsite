import { useEffect, useState } from "react";
import Link from "next/link";

import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";

import NavbarLinks from "./NavbarLinks";
import { useClasses, useWindowSize } from "../../@ronday/hooks";
import Logo from "../../assets/svg/logo.js/Logo";
import styles from "../../assets/jss/ronday-material/components/navStyle";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const classes = useClasses(styles, { open });
  const [width, ] = useWindowSize();

  const handleClose = () => {
    open && setOpen(false);
  };

  useEffect(() => {
    open && setOpen(false);
  }, [width]);

  return (
    <>
      {/* Prevents layout shift when drawer is opened and closed */}
      {open && (
        <style jsx global>
          {`
            body {
              margin-right: 16px;
            }
          `}
        </style>
      )}

      <div className={classes.navbar}>
        <div className={classes.navbarContainer}>
          <Link href={"/"}>
            <a title="home" className={classes.logo}>
              <Logo />
            </a>
          </Link>

          <Button
            className={
              classes.navbarMenuButton
            }
            title="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon className={classes.iconLightest} />
          </Button>
          <ul className={classes.navbarLinksContainer}>
            <NavbarLinks onClick={() => {}} linkClass={classes.navbarLink} />
          </ul>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={open}
        className={classes.drawer}
        transitionDuration={500}
        onClose={handleClose}
      >
        <ul className={classes.drawerLinksContainer}>
          <li className={classes.drawerLogo}>
            <Link href={"/"}>
              <a title="home" onClick={() => setOpen(!open)}>
                <Logo viewBox="0 0 116 32" width={90} height={32} />
              </a>
            </Link>
          </li>
          <NavbarLinks
            onClick={() => setOpen(!open)}
            linkClass={classes.drawerLink}
          />
        </ul>
      </Drawer>
    </>
  );
};

export default NavBar;
