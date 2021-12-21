import { useEffect, useState } from 'react';
import { Box, useMediaQuery, Center, Spinner } from '@chakra-ui/react';
import ReactGA from 'react-ga';

import NavHeader from './components/NavHeader';
import Banner from './components/Banner';
import Container from './components/Container';
import Nmt from './components/Nmt';
import ScanNftMart from './components/ScanNftMart';
import Polkadot from './components/Polkadot';
import Application from './components/Application';
import Regard from './components/Regard';
import Footer from './components/Footer';

function App() {
  let isnarrow: boolean = true;
  // let isnarrowPc:boolean = true;
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  isnarrow = !isLargerThan700;
  const [ready, setReady] = useState(false);
  // isnarrowPc = !isLargerThan1280;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 200);
  }, []);
  return (
    <>
      {ready ? (
        <Box>
          <Container
            background="#000000"
          >
            <NavHeader isnarrow={!!isnarrow} />
            {/* <Swiper 
           direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true}
            pagination={{
              "clickable": true
            }} className="mySwiper">
            <SwiperSlide>
              <Box>
                <Banner isnarrow={isnarrow} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Banner isnarrow={isnarrow} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Banner isnarrow={isnarrow} />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Banner isnarrow={isnarrow} />
              </Box>
            </SwiperSlide>
            </Swiper> */}
            <Box id="Mart">
              <Banner isnarrow={!!isnarrow} />
            </Box>
            <Box id="Token">
              <Nmt isnarrow={!!isnarrow} />
            </Box>
            <Box id="Explore">
              <ScanNftMart isnarrow={!!isnarrow} />
            </Box>
            <Box id="Blockchain">
              <Polkadot isnarrow={!!isnarrow} />
            </Box>
            <Box id="Artist invites">
              <Application isnarrow={!!isnarrow} />
            </Box>
            <Box id="Write paper">
              <Regard isnarrow={!!isnarrow} />
            </Box>
            <Box>
              <Footer id="medium" isnarrow={!!isnarrow} />
            </Box>
          </Container>
        </Box>
      ) : (
        <Center height="100vh">
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Center>
      )}
    </>
  );
}

export default App;
