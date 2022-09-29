import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext.jsx/AppContextProvider";
import {
  deleteFromCart,
  getCartApi,
  updateQuantity,
} from "../Reducer/actionCreator";

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getCartApi(dispatch);
  }, []);

  return (
    <Container maxW="container.mm">
      <Box>
        {state.cart && (
          <HStack my={5} justifyContent="space-between" mx={5}>
            <Text as="b" fontSize={25} color="#6F38C5" align="end">
              Total Cart Items : {state.cart.length}
            </Text>
          </HStack>
        )}
        <Flex>
          {state.isprodLoading && (
            <VStack w="45%">
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
          {state.isprodError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Something went wrong !!!</AlertTitle>
            </Alert>
          )}
          <VStack w="60%" >
            {state.cart &&
              state.cart.map((el) => {
                return (
                  <Flex
                    key={el.id}
                    p={10}
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                    
                  >
                    <HStack
                      bg="white"
                      maxW="mm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      h="280px"
                      justifyContent="center"
                      w="80%"
                      _hover={{
                        transform: "translateY(2px)",
                        boxShadow: "lg",
                      }}
                    >
                      <Link to={`/product/${el.id}`}>
                        <Image
                          src={el.image}
                          alt={`Picture of ${el.title}`}
                          roundedTop="lg"
                          h="300px"
                          m="auto"
                          p={3}
                        />
                      </Link>

                      <Box p="6" justifyContent="center">
                        <Flex
                          mt="1"
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            color="#937DC2"
                          >
                            {el.title}
                          </Box>
                        </Flex>

                        <Flex
                          justifyContent="space-between"
                          alignContent="center"
                          my={1}
                        >
                          <Box>
                            <Text fontSize="lg" color="#590696">
                              {el.category}
                            </Text>
                          </Box>
                          <Box fontSize="2xl">
                            <Box as="span" color={"gray.600"} fontSize="lg">
                              $
                            </Box>
                            {el.price}
                          </Box>
                        </Flex>
                        <Text fontWeight={500}>QTY : {el.Qty}</Text>

                        <HStack justifyContent="space-evenly">
                          <Box>
                            <Button
                              margin="auto"
                              alignItems="center"
                              my={3}
                              bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
                              onClick={() =>
                                updateQuantity(el.id, dispatch, {
                                  ...el,
                                  Qty: el.Qty - 1,
                                })
                              }
                              disabled={el.Qty === 1}
                            >
                              -
                            </Button>
                          </Box>
                          <Box>
                            <Button
                              margin="auto"
                              alignItems="center"
                              my={3}
                              bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
                              onClick={() =>
                                updateQuantity(el.id, dispatch, {
                                  ...el,
                                  Qty: el.Qty + 1,
                                })
                              }
                            >
                              +
                            </Button>
                          </Box>
                          <Button
                            margin="auto"
                            alignItems="center"
                            my={3}
                            bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
                            onClick={() => deleteFromCart(el.id, dispatch)}
                          >
                            Delete
                          </Button>
                        </HStack>
                      </Box>
                    </HStack>
                  </Flex>
                );
              })}
          </VStack>
          <VStack w="40%" >
            {state.cart && (
              <Box
                w="90%"
                h={"80vh"}
                pl={20}
                pt={20}
                pr={20}
                bg="#f5f5f5"
                mb={10}
              >
                <Text fontWeight={700}>Price Details :</Text>

                <Box mt={5}>
                  <hr color="#C70A80" />
                </Box>

                <Flex justifyContent="space-between" mt={10} alignItms="center">
                  <Text fontSize="xl">Price :</Text>
                  <Box>
                    <Text>200</Text>
                  </Box>
                </Flex>
                <Flex justifyContent="space-between" mt={10} alignItms="center">
                  <Text fontSize="xl">Discount (5%) :</Text>
                  <Box>
                    <Text>200</Text>
                  </Box>
                </Flex>

                <Flex justifyContent="space-between" mt={10} alignItms="center">
                  <Text fontWeight={700} fontSize="2xl">
                    Total :
                  </Text>
                  <Box>
                    <Text>200</Text>
                  </Box>
                </Flex>

                <Flex mt={7} gap={5}>
                  <input type="checkbox" />
                  <Text>
                    I agree to the Terms of Use and have read and understand the
                    Privacy Policy
                  </Text>
                </Flex>

                <Box justifyItems="center">
                  <Link to="/payment">
                    <Button
                      mt={5}
                      ml="95px"
                      p={4}
                      color="white"
                      fontWeight="bold"
                      borderRadius="md"
                      bgGradient="linear(to-r, teal.500, green.500)"
                      _hover={{
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                    >
                      CheckOut
                    </Button>
                  </Link>
                </Box>
              </Box>
            )}
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Cart;
