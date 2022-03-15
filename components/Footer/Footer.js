import Link from "next/link";
import Image from "next/image";

import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Favorite from "@material-ui/icons/Favorite";

import { MusicCredits } from "../../components/MusicCredits";

import useClasses from "../../@ronday/hooks/useClasses";
import download from "../../@ronday/download";
import FooterImage from "../../public/img/HomePage/Footer/footer_image.png";
import Logo from "../../assets/svg/logo.js/Logo";

import styles from "../../assets/jss/ronday-material/components/footerStyle";

const Footer = () => {
  const classes = useClasses(styles);
  const year = new Date().getFullYear();

  const handleDownload = (e) => {
    e.preventDefault();
    download();
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footerSection}>
        <div className={classes.joinRondayContainer}>
          <Favorite className={classes.heart} color="error" />
          <p className={classes.title}>Ready to try Ronday?</p>
          <Button
            className={`${classes.footerButton} waitlist-btn`}
            href="https://forms.gle/2PfqTHoZ5HGXiShB7"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            disableElevation={true}
          >
            Get Ronday!
          </Button>
        </div>
      </div>

      <div className={classes.footerSection}>
        <Image
          src={FooterImage}
          alt="Pool area with floaties"
          placeholder="blur"
          blurDataURL={"/img/PlaceHolders/HomePage/Footer/footer_image.png"}
          width={1200}
          height={420}
          layout="responsive"
          quality={100}
        />
      </div>

      <div className={classes.mainFooterSection}>
        <div className={classes.linkContainer}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Link href={"/pricing"}>
                <a>Pricing</a>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href={"/"}>
                <a onClick={handleDownload}>Download</a>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href={"/help"}>
                <a>Help</a>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href={"/privacy-policy"}>
                <a>Privacy Policy</a>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href={"/terms-of-service"}>
                <a>Terms of Service</a>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.copyrightContainer}>
          <Link href={"/"}>
            <a title="home">
              <Logo className={classes.logo} />
            </a>
          </Link>
          <div className={classes.copyright}>
            &#169; {year} Ronday Technologies
          </div>
        </div>
      </div>
      <MusicCredits />
    </footer>
  );
};

export default Footer;
