import React from 'react';
import {useSpring, animated} from 'react-spring';

function HairImageContainer(props) {
    const styleProps = useSpring({
        opacity:1, width: "400px", backgroundColor: 'black', margin: "5px 2px", from: { opacity:0}
    })
    const imgURL = props.imgURL;
    return (
        <animated.img style={styleProps} src={imgURL}/>
    )
} 

export default HairImageContainer;