import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';

const emailUrl = `${process.env.MAIL}`;
console.log(emailUrl, 'email url');
const ICONS = ['github', 'Telegram', 'twitter', 'Medium'];
const links = [
  'https://github.com/NFTT-studio/',
  'https://t.me/NFTMartOfficial/',
  'https://twitter.com/NFTMartio/',
  'https://nftmart-io.medium.com/',
];

const ICON_LIST = ICONS.map((title, index) => ({
  src: `/images/${title}.png`,
  hoverSrc: `/images/${title}.png`,
  id: index,
  link: links[index],
}));
export default function Footer(props: any) {
  const { isnarrow } = props;

  const iconList = ICON_LIST;

  return (
    <Box>
      {isnarrow ? (
        <Box
          as="footer"
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          backgroundColor="#000000"
          borderTop="1px solid #979797"
          width="100%"
          flexFlow="column"
        >
          <Flex
            display="flex"
            justifyContent="space-around"
            flexFlow="wrap"
            paddingTop="10px"
            paddingBottom="37px"
            margin="0 15px"
          >
            <Box width="100%">
              <Box
                fontFamily="TTHoves-Medium, TTHoves"
                lineHeight="11px"
                color="#FFFFFF"
                fontWeight="500"
                fontSize="6px"
                mb="9px">
                FOLLOW US
              </Box>
              <Box mb="25px" display="flex">
                {iconList.map(({ id, src, link }) => (
                  <Box
                    ml={id !== 0 ? '12px' : 0}
                    role="group"
                    key={src}
                    onClick={() => window.open(link, '_blank')}
                  >
                    <Box as="img" alt="" src={src} width="30px" cursor="pointer" />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box width="100%">
              <Text
                lineHeight="20px"
                fontWeight="blod"
                fontSize="7px"
                color="#FFFFFF"
                fontFamily="TTHoves-Medium, TTHoves"
                mb="10px"
              >
                ABOUT US
              </Text>
              <Text
                fontFamily="TTHoves-Medium, TTHoves"
                color="#FFFFFF"
                fontSize="9px">
                NFTMart,
                dedicated to an instant and inclusive coverage of everything happening in the crypto/blockchain world,
                delivers right trade information with professional insights and state-of-art accuracy to an international readership.
              </Text>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box
          as="footer"
          flex={1}
          width="100vw"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          backgroundColor="#000000"
          borderTop="1px solid #979797"
          flexFlow="row"
          position="relative"
        >
          <Flex
            marginTop="3.125rem"
            marginBottom="9rem"
            maxWidth="1440px"
            width="100%"
            justifyContent="space-between"
            p="0 2.5rem"
          >
            <Image width="auto" height="1.9rem" src="/images/logo.png" />
            <Flex
              width="37.12rem"
              flexDirection="column"
            >
              <Text
                fontSize="1.13px"
                fontFamily="TTHoves-Medium, TTHoves"
                fontWeight="500"
                color="#FFFFFF"
                lineHeight="22px"
                marginBottom="20px"
              >
                ABOUT US
              </Text>
              <Text
                fontSize="1.13px"
                fontFamily="TTHoves-Medium, TTHoves"
                fontWeight="500"
                color="#999999"
                lineHeight="22px">
                NFTMart, dedicated to an instant and inclusive coverage of everything happening in the crypto/blockchain world, delivers right trade information with professional insights and state-of-art accuracy to an international readership.
              </Text>
            </Flex>
            <Flex
              flexDirection="column"
            >
              <Text
                fontSize="1.13px"
                fontFamily="TTHoves-Medium, TTHoves"
                fontWeight="500"
                color="#FFFFFF"
                lineHeight="22px"
                marginBottom="20px"
              >
                FOLLOW US
              </Text>
              <Box mb="20px" display="flex">
                {iconList.map(({ id, src, link }) => (
                  <Box
                    ml={id !== 0 ? '30px' : 0}
                    role="group"
                    key={src}
                    onClick={() => window.open(link, '_blank')}
                  >
                    <Box as="img" alt="" src={src} width="32px" cursor="pointer" />
                  </Box>
                ))}
              </Box>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
