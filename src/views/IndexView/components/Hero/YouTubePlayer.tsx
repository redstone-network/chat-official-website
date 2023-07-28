import Box from '@mui/material/Box';
import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }: {videoId: string}) => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // 在这里可以设置一些参数，比如自动播放、循环播放等，根据需要修改
      autoplay: 0,
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
    console.log('Error:', event);
  };

  return (
    <div>
      <Box
        position={{ md: 'absolute' }}
        right={{md: '2rem'}}
        top={{ md: '10rem' }}>
        <Box
          width={{ xs: '100%', sm: '100%', md: '28rem' }}
          height={{ xs: '16rem', sm: '20rem', md: '15rem' }}
          zIndex={30}
          component="a"
          sx={{
            backgroundImage: 'url(https://img1.imgtp.com/2023/06/12/LhoCN18l.png)',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#62D0D6" />
            <path
              d="M34.8605 22.8988C35.9294 23.6987 35.9294 25.3013 34.8605 26.1012L19.9484 37.2617C18.6297 38.2487 16.75 37.3077 16.75 35.6605L16.75 13.3395C16.75 11.6923 18.6297 10.7513 19.9484 11.7383L34.8605 22.8988Z"
              fill="white"
            />
          </svg>
        </Box>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={onEnd} onError={onError} />
      </Box>
    </div>
  );
};

export default YouTubePlayer;
