import React from "react";
import PropTypes from 'prop-types';
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

class VideoPlyr extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { src, ref } = this.props;
    const videoSrc = {
      type: "video",
      sources: [
        {
          src,
          type: "video/mp4",
          size: 720,
        },
      ],
    };
    return <Plyr ref={ref} source={videoSrc} />;
  }
}

VideoPlyr.propTypes = {
  src: PropTypes.string
}

export default React.forwardRef((props, ref) => (
  <VideoPlyr {...props} ref={ref} />
));
