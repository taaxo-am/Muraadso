import React from 'react';
import Styles from './video.module.css'

const Video = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.videoContainer}>
                <iframe className={Styles.video} src="https://www.youtube.com/embed/R4jLhwDHhpo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
        </div>
    );
};

export default Video;
