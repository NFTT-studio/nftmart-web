import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';
import polkadotBannerWeb from "../assets/images/polkadotBannerWeb.png";
import polkadotBanner from "../assets/images/polkadotBanner.png";
import polkadot from "../assets/images/polkadot.png";

const Polkadot = (props: any) => {
  const { isnarrow } = props;
  return (
    <Box>
      {isnarrow ? (
        <Flex
          marginTop="40px"
          marginBottom="10px"
          width="100%"
          backgroundColor="#000000"
          height=""
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
              src={polkadotBannerWeb}
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
                By using the WEB3 tool provided by Parity , you can conveniently perform various operations on the NFTMart main chain, including transferring money, becoming a nominator, a validator, and main chain governance.
              </Text>
              <Text
                w="100%"
                fontSize="11px"
                fontFamily="TTHoves-DemiBold, TTHoves"
                fontWeight="600"
                color="#FFFFFF"
                lineHeight="13.5px"
                letterSpacing="0.5px"
                textAlign="center"
              >
                How to
              </Text>
              <Link
                href="https://github.com/NFTT-studio/nftmart-validator"
                target="_blank"
                w="100%"
                marginTop="5px"
                fontSize="11px"
                fontFamily="TTHoves-DemiBold, TTHoves"
                fontWeight="600"
                color="#87D3FF"
                lineHeight="13.5px"
                letterSpacing="0.5px"
                textAlign="center"
              >
                Become a validator
              </Link>
              <Link
                href="https://nftmart-io.medium.com/how-to-become-a-nftmart-mainnet-nominee-20ced021c98f"
                target="_blank"
                w="100%"
                marginTop="5px"
                fontSize="11px"
                fontFamily="TTHoves-DemiBold, TTHoves"
                fontWeight="600"
                color="#87D3FF"
                lineHeight="13.5px"
                letterSpacing="0.5px"
                textAlign="center"
              >
                Become a validator
              </Link>
              <Link
                href="https://mainnet.nftmart.io"
                target="_blank"
                marginTop="15px"
                marginBottom="15px"
                display="inline-block"
                backgroundColor="#FFFFFF"
                p="0 5px"
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
                {"polkadot{.js}"}
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
              src={polkadotBanner}
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
                height="120px"
                src={polkadot}
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
                By using the WEB3 tool provided by Parity , you can conveniently perform various operations on the NFTMart main chain, including transferring money, becoming a nominator, a validator, and main chain governance.
              </Text>
              <Flex
                mt="48px"
              >
                <Text
                  fontSize="22px"
                  mr="20px"
                  fontFamily="TTHoves-DemiBold, TTHoves"
                  fontWeight="600"
                  color="#FFFFFF"
                  lineHeight="27px"
                  letterSpacing="0.5px"
                  textAlign="center"
                >
                  How to
                </Text>
                <Link
                  href="https://github.com/NFTT-studio/nftmart-validator"
                  target="_blank"
                  fontSize="22px"
                  mr="20px"
                  fontFamily="TTHoves-DemiBold, TTHoves"
                  fontWeight="600"
                  color="#87D3FF"
                  lineHeight="27px"
                  letterSpacing="0.5px"
                  textAlign="center"
                >
                  Become a validator
                </Link>
                <Link
                  href="https://nftmart-io.medium.com/how-to-become-a-nftmart-mainnet-nominee-20ced021c98f"
                  target="_blank"
                  fontSize="22px"
                  fontFamily="TTHoves-DemiBold, TTHoves"
                  fontWeight="600"
                  color="#87D3FF"
                  lineHeight="27px"
                  letterSpacing="0.5px"
                  textAlign="center"
                >
                  Become a nominee
                </Link>
              </Flex>
              <Link
                href="https://mainnet.nftmart.io"
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
                {"polkadot{.js}"}
              </Link>
            </Flex>

          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Polkadot;
