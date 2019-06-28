import React from 'react';
import {useSpring, animated} from 'react-spring';
import './../css/Video.css';


const VideoContainer = (props) => {
    const styleProps = useSpring({opacity: 1, width: '300px', height: '150px', display:'inline-block', margin: '5px 3px', from: {opacity: 0}})

    return (
        <animated.div style={styleProps}>
            <iframe className="video" title={props.videoText} src={props.videoSRC} frameBorder="0" allowFullScreen={true} webkitallowfullscreen="true"></iframe>
            <p>{props.videoText}</p>
        </animated.div>
    )
};

export default VideoContainer;