import { cloneElement, Children } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import PropTypes from "prop-types";
import clsx from "clsx";

const NavLink = ({ children, href, className, activeClassName, ...rest }) => {
  const child = Children.only(children);
  const { pathname } = useRouter();

  return (
    <Link href={href === "" ? pathname : href} {...rest}>
      {cloneElement(child, {
        className: clsx(className, pathname === href ? activeClassName : ""),
        "aria-current": pathname === href ? "page" : null,
      })}
    </Link>
  );
};

NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  activeClassName: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default NavLink;
