import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext.jsx/AppContextProvider";
import { loginReq } from "../AuthReducer/actionCreator";

export default function SimpleCard() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>products</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          {!state.isAuth && !state.isLoading && !state.isError && (
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    dispatch({
                      type: "EMAIL_ONCHANGE",
                      payload: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      type: "PASSWORD_ONCHANGE",
                      payload: e.target.value,
                    })
                  }
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() =>
                    loginReq(
                      { email: state.email, password: state.password },
                      dispatch
                    )
                  }
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          )}
          {state.isLoading && (
            <VStack>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
              <Text> Please Wait....</Text>
            </VStack>
          )}
          {state.isAuth && !state.isLoading && (
            <Box textAlign="center" py={10} px={6}>
              <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
              <Heading as="h2" size="xl" mt={6} mb={2}>
                Welcome
              </Heading>
              <Text color={"gray.500"}>You are Logged in</Text>
              <Text color={"gray.500"}>Token : </Text>
              <Button
                my={5}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                Log Out
              </Button>
            </Box>
          )}
          {!state.isAuth && state.isError && (
            <Box textAlign="center" py={10} px={6}>
              <Box display="inline-block">
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  bg={"red.500"}
                  rounded={"50px"}
                  w={"55px"}
                  h={"55px"}
                  textAlign="center"
                >
                  <CloseIcon boxSize={"20px"} color={"white"} />
                </Flex>
              </Box>
              <Heading as="h2" size="xl" mt={6} mb={2}>
                Oops! Something went Wrong
              </Heading>
              <Text color={"gray.500"}>Please try again ...</Text>
              <Button
                my={5}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                Sign in
              </Button>
            </Box>
          )}
        </Box>
      </Stack>
    </Flex>
  );
}
