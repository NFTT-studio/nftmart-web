import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';
import regardBannerWeb from "../assets/images/regardBannerWeb.png";
import regardBanner from "../assets/images/regardBanner.png";

const Regard = (props: any) => {
  const { isnarrow } = props;
  return (
    <Box>
      {isnarrow ? (
        <Flex
          marginTop="40px"
          marginBottom="40px"
          width="100%"
          minHeight="330px"
          backgroundColor="#000000"
          position="relative"
          justifyContent="center"
        >
          <Flex
            width="100%"
            minHeight="330px"
            backgroundColor="#000000"
            position="relative"
          // zIndex={}
          >
            <Image
              width="100%"
              minHeight="330px"
              src={regardBannerWeb}
              objectFit="cover"
              zIndex={0}
            />
            <Flex
              width="100%"
              height="100%"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems="center"
              position="absolute"
              zIndex={1}
            >
              <Text
                p="15px"
                marginTop="15px"
                w="100%"
                fontSize="10.5px"
                fontFamily="TTHoves-Medium, TTHoves"
                fontWeight="500"
                color="#F4F4F4"
                lineHeight="14px"
                letterSpacing="1px"
                textAlign="center"
              >
                Regarding the token economic model and governance model of NFTMart,
                there is a detailed introduction in the white paper. Through the white paper,
                you can better understand NFTMart.
              </Text>
              <Link
                href="http://res.bcdata.top/Whitepaper.pdf"
                target="_blank"
                marginTop="11px"
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
              >
                Whitepaper
              </Link>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          marginTop="80px"
          marginBottom="150px"
          width="100vw"
          backgroundColor="#000000"
          position="relative"
          justifyContent="center"
        >
          <Flex
            width="100vw"
            maxWidth="1440px"
            backgroundColor="#000000"
            position="relative"
          // zIndex={}
          >
            <Image
              width="100%"
              minHeight="660px"
              src={regardBanner}
              objectFit="cover"
              zIndex={0}
            />
            <Flex
              width="100%"
              height="100%"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems="center"
              position="absolute"
              zIndex={1}
            >

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
                Regarding the token economic model and governance model of NFTMart,
                there is a detailed introduction in the white paper. Through the white paper,
                you can better understand NFTMart.
              </Text>
              <Link
                href="http://res.bcdata.top/Whitepaper.pdf"
                target="_blank"
                marginTop="3.125rem"
                marginBottom="2rem"
                display="inline-block"
                backgroundColor="#FFFFFF"
                width="174px"
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
                Whitepaper
              </Link>
            </Flex>

          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Regard;
