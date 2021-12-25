/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState, useRef } from 'react';
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
  const [goto, setGoto] = useState(true);
  const [gotoscrollToHeight, setGotoScrollToHeight] = useState(0);

  const titleRef = useRef<HTMLImageElement>(null);
  const sectionTwoRef = useRef<HTMLImageElement>(null);
  const sectionThreeRef = useRef<HTMLImageElement>(null);
  const sectionFourRef = useRef<HTMLImageElement>(null);
  const sectionFiveRef = useRef<HTMLImageElement>(null);
  const sectionsixRef = useRef<HTMLImageElement>(null);
  // isnarrowPc = !isLargerThan1280;
  // const titleRef = React.createRef();
  // const sectionTwoRef = React.createRef();
  // const sectionThreeRef = React.createRef();
  // const sectionFourRef = React.createRef()
  // const sectionFiveRef = React.createRef()
  let scrollT = 0
  let topValue = 0
  const getScollTop = () => {
    let scrollTop = 0;
    if (document?.documentElement && document?.documentElement?.scrollTop) {
      scrollTop = document?.documentElement.scrollTop;
    }
    else if (document?.body) {
      scrollTop = document?.body.scrollTop;
    }
    return scrollTop;
  }
  const bindHandleScroll = (e: any) => {
    scrollT = getScollTop();
    setTimeout(function () { topValue = scrollTop; }, 0);
    // const titleRef = document.getElementById("Mart");
    let scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);
    const refsArray = [titleRef, sectionTwoRef, sectionThreeRef, sectionFourRef, sectionFiveRef, sectionsixRef];
    let nowTop = 0;
    refsArray && refsArray.map((item: any, index) => {
      if (Number(scrollTop) > Number(nowTop + (item.current.scrollHeight / 1000 * 520)) && Number(scrollTop) < Number(nowTop + (item.current.scrollHeight / 1000 * 630))) {
        if (refsArray && refsArray[index + 1]) {
          console.log(scrollT, topValue)
          if (scrollT > topValue) {
            const scrollToHeight = nowTop + Number(refsArray ? refsArray[index]?.current?.scrollHeight : 0);
            setGotoScrollToHeight(scrollToHeight);

            // if (goto) {
            //   
            //   
            // }
          }
        }
      }
      nowTop += item.current.scrollHeight;
    });
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  useEffect(() => {
    console.log(gotoscrollToHeight);
    console.log(goto);
    if (gotoscrollToHeight > 0 && goto) {
      scrollT = getScollTop();
      if (scrollT > topValue) {
        window.scrollTo(0, gotoscrollToHeight || 0);
      }
    }
    if (goto === false) {
      setTimeout(() => {
        setGoto(true);
      }, 1000);
    }
  }, [gotoscrollToHeight, goto]);
  useEffect(() => {
    setReady(true);
    setTimeout(() => {
      window.addEventListener('scroll', bindHandleScroll)
    }, 200);
  }, []);
  return (
    <>
      {ready ? (
        <Box>
          <Container
            background="#000000"
          >
            <NavHeader isnarrow={!!isnarrow} setGoto={setGoto} />
            <Box id="Mart" boxSizing="border-box" ref={titleRef}>
              <Banner isnarrow={!!isnarrow} />
            </Box>
            <Box id="Token" boxSizing="border-box" ref={sectionTwoRef}>
              <Nmt isnarrow={!!isnarrow} />
            </Box>
            <Box id="Explore" boxSizing="border-box" ref={sectionThreeRef}>
              <ScanNftMart isnarrow={!!isnarrow} />
            </Box>
            <Box id="Blockchain" boxSizing="border-box" ref={sectionFourRef}>
              <Polkadot isnarrow={!!isnarrow} />
            </Box>
            <Box id="Artist invites" boxSizing="border-box" ref={sectionFiveRef} >
              <Application isnarrow={!!isnarrow} />
            </Box>
            <Box id="Write paper" boxSizing="border-box" ref={sectionsixRef}>
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
