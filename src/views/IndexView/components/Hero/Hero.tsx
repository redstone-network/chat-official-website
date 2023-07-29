import React, {useRef, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import YouTubePlayer from './YouTubePlayer';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [show, setShow] = React.useState(true);
  const handleReady = (event) =>
  {
    console.log('Player is ready:', event);
    setShow(!show);
  };
  const videoRef = useRef(null);
  const [videoWidth, setVideoWidth] = React.useState(0);
  const [videoHeight, setVideoHeight] = React.useState(0);
  useEffect(() =>
  {
    if (videoRef.current)
    {
      setVideoWidth(videoRef.current.clientWidth);
      setVideoHeight(videoRef.current.clientHeight);
    }
  });
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box
        width={{ xs: '100%', sm: '100%', md: '28rem', lg: '32rem', xl: '42rem' }}
        height={{ xs: '16rem', sm: '20rem', md: '15rem', lg: '18rem', xl: '22rem' }}
        position={{ md: 'absolute', lg: 'absolute' }}
        right={{md: '4rem', lg: '4rem', xl: '4rem', right: '8rem'}}
        top={{ md: '8rem', lg: '10rem', xl: '16rem' }}
        zIndex={2}
        ref={videoRef}
        borderRadius={{md: 2}}
        // component="a"
        // href="https://drive.google.com/file/d/1DEcF_B-JLyF-O7rSeWYimsnVZRRlyP3h/view"
        sx={{
          backgroundImage: 'url(https://img1.imgtp.com/2023/06/12/LhoCN18l.png)',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {show && <div onClick={() => { setShow(!show); }}>
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
        </div>}
        {!show && <div>
          <YouTubePlayer width={videoWidth} height={videoHeight} videoId="9ajLQvndhJA" handleReady={handleReady}></YouTubePlayer>
        </div>}
      </Box>
      <Box paddingY={{ xs: 0, sm: '7rem', md: '11rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Your Trusted
              <br />
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                decision-making
              </Typography>
              <br />
              <span>assistant</span>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Unlock the power of data with ChatGPT
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={'https://forms.gle/VXmvY3S7yN7torWT8'}
              >
                Join Beta
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href={
                    'https://snc-lab.notion.site/Light-paper-ChatData-Insight-09f0a9e6147049a1a9eddc945e5b1359?pvs=4'
                  }
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Light Paper
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={{ xs: '0', sm: '0', md: '31rem', lg: '50rem' }}
            right={'0'}
            top={0}
            position={'absolute'}
          >
            <Box
              component={LazyLoadImage}
              effect="blur"
              src={'https://img1.imgtp.com/2023/06/11/S9HuhK1F.png'}
            />
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
