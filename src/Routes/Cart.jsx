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
import React, {  useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext.jsx/AppContextProvider";
import { deleteFromCart, getCartApi, updateQuantity } from "../Reducer/actionCreator";

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getCartApi(dispatch);
  },[])

  return (
    <Container maxW="container.mm" >
      <Box>
        <Stack my={3}>
          <Text as="b" fontSize={25} color="#6F38C5" align="center">
            Your Cart
          </Text>
        </Stack>
        <Box>
          {state.isprodLoading && (
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
          {state.isprodError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Something went wrong !!!</AlertTitle>
            </Alert>
          )}
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            {state.cart &&
              state.cart.map((el) => {
                return (
                  <Flex
                    key={el.id}
                    p={50}
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      bg="white"
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      h="500px"
                      justifyContent="center"
                      w="300px"
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
                              disabled={el.Qty===1}
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
                    </Box>
                  </Flex>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};




export default Cart