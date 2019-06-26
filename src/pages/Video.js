import React, { Component } from 'react';
import './../css/Video.css';
import VideoContainer from './../components/VideoContainer';

class Video extends Component {
    
    videoURLS = [
        {videoSRC:'https://www.youtube.com/embed/t0lrRh4w1gk', videoText: 'Jon Mitsui + Josephine Tseng'},
        {videoSRC:'https://www.youtube.com/embed/jWIUu3E5pH8', videoText: 'Walk SF'},
        {videoSRC:'https://player.vimeo.com/video/224630167', videoText: 'Tom Harris Designs'},
        {videoSRC:'https://www.youtube.com/embed/jiHldZv4F2A', videoText: 'MxM Carnival'},
        {videoSRC:'https://www.youtube.com/embed/XDGELxziTHg', videoText: 'Rosalind Hsu + Jason Lin'},
        {videoSRC:'https://www.youtube.com/embed/65pxjHrIqLg', videoText: 'Beauz'},
        {videoSRC:'https://www.youtube.com/embed/UUQiKJkujRM', videoText: 'Groove Against the Machine'},
        {videoSRC:'https://www.youtube.com/embed/6VkPkSCf2GA', videoText: 'Thrive Dance Company'},
        {videoSRC:'https://player.vimeo.com/video/242281597', videoText: 'SF World Day of Remembrance'},
        {videoSRC:'https://www.youtube.com/embed/I9f9W-eFKVo', videoText: 'Alumni Dance Collective'},
        {videoSRC:'https://player.vimeo.com/video/226389813', videoText: 'Big Ts Trees'},
        {videoSRC:'https://www.youtube.com/embed/zK49_9Hl26o', videoText: 'Jessica Jin'},
        {videoSRC:'https://www.youtube.com/embed/LlPRUxgN_js', videoText: 'Joy Tang'},
    ]

    render() {
        return (
            <div className="videoGrid">
                {this.videoURLS.map(item => {
                    return <VideoContainer videoSRC={item.videoSRC} videoText={item.videoText}></VideoContainer>
                })}
            </div>
        )
    }
}

export default Video;