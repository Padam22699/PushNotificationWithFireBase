import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

export default function Videos() {
  const videoRef = useRef();

  const playVideo = () => {
    videoRef.current && videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current && videoRef.current.pause();
  };

  const seekToTime = timeInSeconds => {
    videoRef.current && videoRef.current.seek(timeInSeconds);
  };

  return (
    <View>
      <VideoPlayer
        video={require('../assest/video/A.mp4')}
        thumbnail={require('../assest/image/B.png')}
        endThumbnail={require('../assest/image/B.png')}
        // showDuration={true}
        ref={videoRef}
        autoplay
        // controls={true}

        disableSeek={true}

        // pauseOnPress={true}
      />
    </View>
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
