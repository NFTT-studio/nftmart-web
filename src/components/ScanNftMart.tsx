import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';
import ScanBannerWeb from "../assets/images/ScanBannerWeb.jpg";
import ScanBanner from "../assets/images/ScanBannerWeb.jpg";

const ScanNftMart = (props: any) => {
  const { isnarrow } = props;
  return (
    <Box>
      {isnarrow ? (
        <Flex
          marginTop="40px"
          marginBottom="10px"
          width="100vw"
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
              src={ScanBannerWeb}
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
                w="100%"
                fontSize="24px"
                fontFamily="TTHoves-DemiBold, TTHoves"
                fontWeight="600"
                color="#F4F4F4"
                lineHeight="23px"
                letterSpacing="1.5px"
                textAlign="center"
              >
                SCAN.NFTMart.io
              </Text>
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
                Through the blockchain explorer,
                you can easily view various historical data of the main network,
                including transactions, accounts, etc.,
                similar to Ethereum's etherscan.io.
              </Text>
              <Link
                href="https://scan.nftmart.io"
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
                Explore
              </Link>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          marginTop="80px"
          marginBottom="70px"
          width="100vw"
          backgroundColor="#000000"
          height=""
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
              maxHeight="750px"
              src={ScanBanner}
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
                fontSize="3rem"
                fontFamily="TTHoves-DemiBold, TTHoves"
                fontWeight="600"
                color="#F4F4F4"
                lineHeight="56px"
                letterSpacing="3px"
                textAlign="center"
              >
                SCAN.NFTMart.io
              </Text>
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
                Through the blockchain explorer,
                you can easily view various historical data of the main network,
                including transactions, accounts, etc.,
                similar to Ethereum's etherscan.io.
              </Text>
              <Link
                href="https://scan.nftmart.io"
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
                Explore
              </Link>
            </Flex>

          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default ScanNftMart;
