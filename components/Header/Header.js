import { useState } from "react";

import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Close from "@material-ui/icons/Close";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";

import ImageCarousel from "../Carousel/ImageCarousel";
import VideoPlyr from "../VideoPlyr/VideoPlyr";
import useClasses from "../../@ronday/hooks/useClasses";
import items from "../../assets/content/headerImages";
import styles from "../../assets/jss/ronday-material/components/headerStyle";

const Header = () => {
  const classes = useClasses(styles);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className={classes.container}>
      <div className={classes.headerContainer}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>
            Connect and collaborate in a virtual space.
          </h1>
        </div>

        <div className={classes.subTitleContainer}>
          <p className={classes.subTitle}>
            Ronday is a new kind of connection and collaboration platform,
            enabling users to work together in a shared online space.
          </p>
        </div>

        <div className={classes.buttonContainer}>
          <Button
            href="https://forms.gle/2PfqTHoZ5HGXiShB7"
            target="_blank"
            rel="noreferrer"
            className={`${classes.button} waitlist-btn`}
            variant="contained"
            disableElevation={true}
          >
            Get Ronday!
          </Button>
          <Button onClick={handleOpen} className={classes.outlinedButton}>
            <PlayCircleOutline />
            Watch Demo
          </Button>
        </div>
        <Modal
          className={classes.videoModal}
          open={open}
          BackdropProps={{style: styles.backDrop}}
          onClose={handleClose}
          disableEscapeKeyDown={false}
          disableRestoreFocus={true}
        >
          <div className={classes.videoModalContainer}>
            <button
              className={classes.videoModalCloseButton}
              onClick={handleClose}
            >
              <Close color="inherit" />
            </button>
            <div className={classes.videoContainer}>
              <VideoPlyr src={"/video/ronday-demo.mp4"} />
            </div>
          </div>
        </Modal>

        <ImageCarousel className={classes.carousel} items={items} />
      </div>
    </header>
  );
};

export default Header;
