import { useEffect, useState, useRef } from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';
import nft01 from "../assets/images/nft01.png";
import nft02 from "../assets/images/nft02.png";
import nft03 from "../assets/images/nft03.png";
import nft04 from "../assets/images/nft04.png";
import nft05 from "../assets/images/nft05.png";
import nft06 from "../assets/images/nft06.png";
import nft07 from "../assets/images/nft07.png";
import nft08 from "../assets/images/nft08.png";
import nft09 from "../assets/images/nft09.png";
import nft10 from "../assets/images/nft10.png";
import nft11 from "../assets/images/nft11.png";
import nft12 from "../assets/images/nft12.png";
import nft13 from "../assets/images/nft13.png";
import nft14 from "../assets/images/nft14.png";

// Hook
export const useWindowSize = () => {
  const isClient = typeof window === 'object';
  const lastWidth = useRef({});

  function getSize() {
    return {
      width: isClient ? window.innerWidth : 0,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      if (window?.innerWidth !== lastWidth.current) {
        const width = getSize();
        lastWidth.current = width;
        setWindowSize(width);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
const Banner = (props: any) => {
  const { isnarrow } = props;
  const [nftImgSlice, setNftImgSlice] = useState<{ id: string, icon: string, url: string }[]>();
  const windowsize = useWindowSize().width
  const nftImg = [
    {
      id: '1',
      icon: nft01,
      url: "https://app.nftmart.io/collection/80-Higo's%20Artwork",
    },
    {
      id: '2',
      icon: nft02,
      url: "https://app.nftmart.io/collection/81-Tracy's%20Portfolio",
    },
    {
      id: '3',
      icon: nft03,
      url: 'https://app.nftmart.io/collection/60-hucongmisuan',
    },
    {
      id: '4',
      icon: nft04,
      url: 'https://app.nftmart.io/collection/25-woto',
    },
    {
      id: '5',
      icon: nft05,
      url: 'https://app.nftmart.io/collection/22-Paper%20Pulp',
    },
    {
      id: '6',
      icon: nft06,
      url: 'https://app.nftmart.io/collection/11-Coding%20Series',
    },
    {
      id: '7',
      icon: nft07,
      url: 'https://app.nftmart.io/collection/2-Vertigob',
    },
    {
      id: '8',
      icon: nft08,
      url: 'https://app.nftmart.io/collection/50-LAIJU%20WARS%20CORPS',
    },
    {
      id: '9',
      icon: nft09,
      url: 'https://app.nftmart.io/collection/13-Dream%20Series',
    },
    {
      id: '10',
      icon: nft10,
      url: 'https://app.nftmart.io/collection/71-Beauty%20And%20The%20West%20Chamber',
    },
    {
      id: '11',
      icon: nft11,
      url: 'https://app.nftmart.io/collection/18-Classical%20Core%20Socialist%20Values%20Collection',
    },
    {
      id: '12',
      icon: nft12,
      url: 'https://app.nftmart.io/collection/49-Random%20style',
    },
    {
      id: '13',
      icon: nft13,
      url: 'https://app.nftmart.io/items/2-0-WU%20World',
    },
    {
      id: '14',
      icon: nft14,
      url: 'https://app.nftmart.io/collection/35-Oriental%20Style',
    },
  ];
  useEffect(() => {
    console.log(windowsize, nftImg.slice(0, 14));
    if (windowsize >= 1320) {
      setNftImgSlice(nftImg.slice(0, 14));
    } else if (windowsize >= 1138) {
      setNftImgSlice(nftImg.slice(0, 13));
    } else if (windowsize >= 1160) {
      setNftImgSlice(nftImg.slice(0, 12));
    } else if (windowsize >= 1080) {
      setNftImgSlice(nftImg.slice(0, 11));
    } else if (windowsize >= 1000) {
      setNftImgSlice(nftImg.slice(0, 10));
    } else if (windowsize >= 910) {
      setNftImgSlice(nftImg.slice(0, 9));
    } else if (windowsize >= 830) {
      setNftImgSlice(nftImg.slice(0, 8));
    } else if (windowsize >= 740) {
      setNftImgSlice(nftImg.slice(0, 7));
    } else if (windowsize < 740) {
      setNftImgSlice(nftImg.slice(0, 6));
    }
    console.log(nftImgSlice);
  }, [windowsize]);
  return (
    <Box>
      {isnarrow ? (
        <Flex
          width="100vw"
          marginTop="55px"
          marginBottom="10px"
          backgroundColor="#000000"
          height="auto"
          position="relative"
          justifyContent="center"
        >
          <Flex
            width="100%"
            backgroundColor="#000000"
            position="relative"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Flex justifyContent="center" alignItems="center">
              {nftImgSlice && nftImgSlice.map((item, index) => (
                <Link
                  key={index}
                  href={item?.url}
                  target="_blank"
                >
                  <Box
                    marginLeft={index === 0 ? '0' : '12.5px'}
                    as="img"
                    src={item?.icon}
                    width="39px"
                    height="211px"
                    cursor="pointer"
                    boxSizing="border-box"
                    objectFit="cover"
                  />
                </Link>
              ))}
            </Flex>
            <Link
              marginTop="13px"
              fontSize="9px"
              fontFamily="TTHoves-Medium, TTHoves"
              fontWeight="500"
              color="#CCB9FF"
              lineHeight="11px"
              letterSpacing="1px"
              href="https://app.nftmart.io/browsing"
              target="_blank"
            >
              Click to view
            </Link>
            <Text
              marginTop="5px"
              w="100%"
              p="0 15px"
              fontSize="10.5px"
              fontFamily="TTHoves-Medium, TTHoves"
              fontWeight="500"
              color="#F4F4F4"
              lineHeight="14px"
              letterSpacing="1px"
              textAlign="center"
            >
              NFTMart adopts an access system for the selection of artists to ensure the
              authenticity and artistic value of the works. All NFTs are stored in the NFTMart
              main chain, with fast transaction speed and low transaction cost.
            </Text>
            <Link
              marginTop="9.5px"
              marginBottom="15px"
              display="inline-block"
              backgroundColor="#FFFFFF"
              width="80px"
              height="24px"
              fontSize="9px"
              fontFamily="TTHoves-Medium, TTHoves"
              fontWeight="500"
              color="#000000"
              lineHeight="24px"
              letterSpacing="0.5px"
              textAlign="center"
              _active={{ background: '#FFFFFF' }}
              cursor="pointer"
              href="https://app.nftmart.io/browsing"
              target="_blank"
            >
              Browsing
            </Link>
          </Flex>
        </Flex>
      ) : (
        <Flex
          width="100vw"
          backgroundColor="#000000"
          height="auto"
          position="relative"
          justifyContent="center"
          marginBottom="70px"
        >
          <Flex
            width="100vw"
            maxWidth="1440px"
            backgroundColor="#000000"
            position="relative"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Flex marginTop="9rem" justifyContent="center" alignItems="center">
              {nftImgSlice && nftImgSlice.map((item, index) => (
                <Link
                  key={index}
                  href={item?.url}
                  target="_blank"
                >
                  <Box
                    marginLeft={index === 0 ? '0' : '1.56rem'}
                    as="img"
                    src={item?.icon}
                    width="4.3rem"
                    height="25rem"
                    cursor="pointer"
                    boxSizing="border-box"
                    objectFit="cover"
                  />
                </Link>
              ))}
            </Flex>
            <Link
              marginTop="2vw"
              fontSize="18px"
              fontFamily="TTHoves-Medium, TTHoves"
              fontWeight="500"
              color="#CCB9FF"
              lineHeight="22px"
              letterSpacing="1px"
              href="https://app.nftmart.io/browsing"
              target="_blank"
            >
              Click to view
            </Link>
            <Text
              marginTop="2.5rem"
              maxWidth="60rem"
              w="100%"
              fontSize="18px"
              fontFamily="TTHoves-Medium, TTHoves"
              fontWeight="500"
              color="#F4F4F4"
              lineHeight="36px"
              letterSpacing="1px"
              textAlign="center"
            >
              NFTMart adopts an access system for the selection of artists to ensure the
              <br></br>
              authenticity and artistic value of the works. All NFTs are stored in the NFTMart
              <br></br>
              main chain, with fast transaction speed and low transaction cost.
            </Text>
            <Link
              href="https://app.nftmart.io/browsing"
              target="_blank"
              marginTop="3.125rem"
              marginBottom="2rem"
              display="inline-block"
              backgroundColor="#FFFFFF"
              width="160px"
              height="48px"
              fontSize="18px"
              fontFamily="TTHoves-Medium, TTHoves"
              fontWeight="500"
              color="#000000"
              lineHeight="48px"
              letterSpacing="1px"
              textAlign="center"
              _active={{ background: '#FFFFFF' }}
              cursor="pointer"
            >
              Browsing
            </Link>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Banner;
