import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';

const Nmt = (props: any) => {
  const { isnarrow } = props;
  return (
    <Box>
      {isnarrow ? (
        <Flex
          marginTop="40px"
          marginBottom="10px"
          width="100%"
          backgroundColor="#000000"
          position="relative"
          justifyContent="center"
        >
          <Flex
            width="100%"
            backgroundColor="#000000"
            position="relative"
          // zIndex={}
          >
            <Image
              width="100%"
              src="/images/nmtBannerWeb.png"
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
              <Image
                height="30px"
                src="/images/nmt.png"
                objectFit="cover"
                zIndex={0}
              />
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
                NMT(NFTMart Token) is the mainnet token of NFTMart,
                which can be used to pay transaction fees, purchase NFTs,
                and participate in the governance of the main chain to obtain benefits through pledges.
                Through Gate.io, you can easily use various legal or digital currencies to purchase NMT.
              </Text>
              <Link
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
                href="https://www.gate.io/trade/NMT_USDT"
                target="_blank"
              >
                Buy NMT
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
              src="/images/nmtBanner.png"
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
              <Image
                height="60px"
                src="/images/nmt.png"
                objectFit="cover"
                zIndex={0}
              />
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
                NMT(NFTMart Token) is the mainnet token of NFTMart,
                which can be used to pay transaction fees, purchase NFTs,
                and participate in the governance of the main chain to obtain benefits through pledges.
                Through Gate.io, you can easily use various legal or digital currencies to purchase NMT.
              </Text>
              <Link
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
                href="https://www.gate.io/trade/NMT_USDT"
                target="_blank"
              >
                Buy NMT
              </Link>
            </Flex>

          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Nmt;
