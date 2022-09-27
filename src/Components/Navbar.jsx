import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function WithSubnavigation() {

  return (
    <Box>
      <Flex
        bg="#F5EFE6"
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 0 }}
        px={{ base: 5 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            boxSize="100px "
            objectFit="cover"
            src="https://www.strivemindz.com/images/ECommerce.png"
            alt="Dan Abramov"
          />
          <Link to="/">
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              as="em"
            >
              ShopEasy
            </Text>
          </Link>

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={500}
            h="40%"
            my="auto"
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link to={"/login"}>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Log In
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link to={navItem.path}>
            <Text as="b" fontSize={18} mx={5} color="#7027A0">
              {navItem.label}{" "}
            </Text>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Products",
    path: "/product",
  },
  {
    label: "Cart ",
    path: "/cart",
  },
];
