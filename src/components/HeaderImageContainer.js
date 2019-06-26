import React from 'react';
import {useSpring, animated} from 'react-spring';

function HeaderImageContainer(props) {
    const styleProps = useSpring({
        opacity:1, width: "100vh", from: { opacity:0, width: "98vh"}
    })
    const imgURL = props.imgURL;
    return (
        <animated.img style={styleProps} src={imgURL} />
    )
} 

export default HeaderImageContainer;