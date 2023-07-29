import React from 'react';
import YouTube, {YouTubeEvent} from 'react-youtube';

const YouTubePlayer = ({ videoId, handleReady, width, height }: { videoId: string, handleReady: (event: YouTubeEvent) => void, width: number,height: number}) => {
  const opts = {
    height: height || '360',
    width: width || '640',
    playerVars: {
      // 在这里可以设置一些参数，比如自动播放、循环播放等，根据需要修改
      autoplay: 1,
      controls: 0,
    },
  };

  const onReady = (event) => {
    // 当播放器准备好时，你可以在这里添加一些处理逻辑
    console.log('Player is ready:', event);
  };

  const onError = (event) => {
    // 如果播放器发生错误，你可以在这里处理
    console.log('Error:', event);
  };
  const onEnd = (event) => {
    // 如果播放器发生错误，你可以在这里处理
    console.log('end:', event);
    handleReady(event);
  };

  return (
    <div>
      <YouTube videoId={videoId} title="test" opts={opts} onReady={onReady} onEnd={onEnd} onError={onError} />
    </div>
  );
};

export default YouTubePlayer;
