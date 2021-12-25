import React, { useState } from 'react';
import {
  Flex,
  Center,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  VStack,
  Image,
} from '@chakra-ui/react';


import { Z_INDEXES } from '../constants';
import colors from '../themes/colors';
import logo from "../assets/images/logo.png";
import meau from "../assets/images/meau.png";

// const titlelize = (word: string) => word[0].toUpperCase() + word.substring(1);

const borderBottom = {
  content: '" "',
  height: '2px',
  width: '80%',
  position: 'absolute',
  backgroundColor: '#999999',
  bottom: -2,
  left: "50%",
  zIndex: 3,
  transform: 'translate(-50%, -50%)',
};

const NavHeader = (props: any) => {
  const { isnarrow, setGoto } = props;
  const [opening, setOpening] = useState(false);
  const [routePath, setRoutePath] = useState("");

  // useEffect(() => {
  //   setRoutePath(location.hash);
  //   console.log(location.hash);
  // }, [location]);
  const LINKS = [
    { title: 'Mart', url: 'app.nftmart.io' },
    { title: 'Token', url: 'Gate.io' },
    { title: 'Explore', url: 'scan.nftmart.io' },
    { title: 'Blockchain', url: 'mainnet.nftmart.io' },
    { title: 'Artist invites', url: '' },
    { title: 'Write paper', url: '' },
  ];

  const LINKS_LIST = LINKS.map((item) => ({
    title: `${item.title}`,
    link: `${item.url}`,
  }));
  const NavLinks = ({ isVertical = false }) => {
    const LinksCom = () => (
      <>
        {LINKS_LIST.map((item) => {
          const active = routePath === `#${item.title}`;
          return (
            <Center
              as="a"
              cursor="pointer"
              marginRight={isVertical ? '0x' : '1.6rem'}
              _hover={{ color: colors.primary }}
              // href={`#${item.title}`}
              key={item.title}
              h={isVertical ? '80px' : ''}
              position="relative"
              onClick={
                () => {
                  setGoto(false);
                  // setRoutePath(`#${item.title}`)
                  // setOpening(false)
                  let anchorElement = document.getElementById(`${item.title}`)
                  if (anchorElement) {
                    anchorElement.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              }

            >
              <Text
                fontFamily="TTHoves-DemiBold, TTHoves"
                fontSize={isVertical ? '13px' : '0.9rem'}
                fontWeight="600"
                color="#F4F4F4"
                _after={active ? borderBottom : {}}
              >
                {`${item.title}`}
              </Text>
            </Center>)
        }
        )}
      </>
    );

    if (isVertical) {
      return (
        <VStack>
          <LinksCom />
        </VStack>
      );
    }
    return (
      <Flex width="100%" justify="flex-end" alignItems="center">
        <LinksCom />
      </Flex>
    );
  };

  return (
    <>
      {isnarrow ? (
        <Flex
          as="header"
          flex={1}
          justify="space-between"
          backgroundColor="#000000"
          boxShadow="md"
          height="40px"
          width="100%"
          // Sticky UI
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={Z_INDEXES.header}
          p="0 16px"
          {...props}
          borderBottom="0.5px solid #4D4D4D"
        >
          <Flex
            p="0 10px"
            height="40px"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            boxSizing="border-box"
          >
            <Image height="30px" width="114px" src={logo} objectFit="contain" />
            <Flex justifyContent="flex-end">
              <Image
                onClick={() => setOpening(true)}
                height="20px"
                width="20px"
                src={meau}
                objectFit="contain"
              />
            </Flex>
          </Flex>
          <Drawer
            isOpen={opening}
            placement="right"
            onClose={() => setOpening(false)}
            size="lg"
          >
            <DrawerContent
              marginTop="41px"
              background="#000000"
              height="240px"
            >
              <DrawerBody
                p="0px"
              >
                {LINKS_LIST.map((item, index) => (
                  <Flex
                    width="100%"
                    height="40px"
                    as="a"
                    cursor="pointer"
                    _hover={{ color: colors.primary }}
                    href={`#${item.title}`}
                    key={item.title}
                    onClick={() => setOpening(false)}
                    borderBottom={index === 5 ? "" : "0.5px solid #4D4D4D"}
                    p="0 15px"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text
                      fontFamily="PingFangSC-Semibold, PingFang SC"
                      fontWeight="600"
                      color="#F4F4F4"
                      fontSize="10.5px"
                    >
                      {`${item.title}`}
                    </Text>
                    <Text
                      fontFamily="PingFangSC-Semibold, PingFang SC"
                      fontWeight="600"
                      color="#999999"
                      fontSize="9px"
                    >
                      {`${item.link}`}
                    </Text>
                  </Flex>
                ))}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      ) : (
        <Flex
          as="header"
          flex={1}
          justify="space-between"
          backgroundColor="#FFFFFF"
          boxShadow="md"
          width="100vw"
          // Sticky UI
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={Z_INDEXES.header}
          background="#000000"
          borderBottom="1px solid #4D4D4D"
          justifyContent="center"
        >
          <Flex
            padding="0 2.5rem"
            maxWidth="1440px"
            w="100%"
            height="80px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image height="40px" width="auto" src={logo} objectFit="contain" />
            <NavLinks />
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default NavHeader;
