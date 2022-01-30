import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';

import applicationBanner from "../assets/images/applicationBanner.jpg";

const Application = (props: any) => {
  const { isnarrow } = props;
  return (
    <Box>
      {isnarrow ? (
        <Flex
          marginTop="40px"
          marginBottom="10px"
          width="100vw"
          backgroundColor="#000000"
          position="relative"
          justifyContent="center"
          minHeight="330px"
        >
          <Flex
            width="100%"
            backgroundColor="#000000"
            position="relative"
          // zIndex={}
          >
            <Image
              width="100%"
              minHeight="330px"
              src={applicationBanner}
              objectFit="cover"
              zIndex={0}
            />
            <Text
              w="214px"
              fontSize="24px"
              fontFamily="TTHoves-Bold, TTHoves"
              fontWeight="bold"
              color="#FFFFFF"
              lineHeight="23px"
              // letterSpacing="3px"
              textAlign="center"
              position="absolute"
              bottom="54%"
              left="15"
            >
              Everything can be reimagined within
            </Text>
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
                We encourage you to be our early creators and mint the cool NFTs on our platform. In NFTMart, we are taking a creator-first, community-led approach by having artists select and invite other artists to join the site and mint NFTs.
              </Text>
              <Link
                href="https://docs.google.com/forms/d/1WCNeiufW1XxLsyme7dJUys7y7t-XJRyp1nQR0bhnvVQ"
                target="_blank"
                marginTop="11px"
                marginBottom="15px"
                display="inline-block"
                backgroundColor="#FFFFFF"
                height="24px"
                fontSize="9px"
                p="0 5px"
                fontFamily="TTHoves-Medium, TTHoves"
                fontWeight="500"
                color="#000000"
                lineHeight="24px"
                letterSpacing="0.5px"
                textAlign="center"
                _active={{ background: '#FFFFFF' }}
                cursor="pointer"
              >
                Application form
              </Link>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          width="100vw"
          backgroundColor="#000000"
          position="relative"
          justifyContent="center"
          marginTop="80px"
          marginBottom="70px"
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
              src={applicationBanner}
              objectFit="cover"
              zIndex={0}
            />
            <Text
              maxWidth="42rem"
              w="100%"
              fontSize="4rem"
              fontFamily="TTHoves-Bold, TTHoves"
              fontWeight="bold"
              color="#FFFFFF"
              lineHeight="75px"
              // letterSpacing="3px"
              textAlign="center"
              position="absolute"
              top="11.3rem"
            >
              Everything can be reimagined within
            </Text>
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
                We encourage you to be our early creators and mint the cool NFTs on our platform.
                In NFTMart, we are taking a creator-first,
                community-led approach by having artists select and invite other artists to join the site and mint NFTs.
              </Text>
              <Link
                href="https://docs.google.com/forms/d/1WCNeiufW1XxLsyme7dJUys7y7t-XJRyp1nQR0bhnvVQ"
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
                Application form
              </Link>
            </Flex>

          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Application;
