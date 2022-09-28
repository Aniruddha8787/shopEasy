import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Container,
  Grid,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, {  useContext, useEffect } from "react";
import { AppContext } from "../AppContext.jsx/AppContextProvider";
import Pagination from "../Components/Pagination";
import ProductCard from "../Components/ProductCard";
import { getProductApi } from "../Reducer/actionCreator";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const { state, dispatch } = useContext(AppContext);
  
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProductApi(dispatch, state);
    setSearchParams({_page:state.page,_limit:9})
  },[state.page])

  return (
    <Container maxW="container.mm" border="red solid 1px">
      <Box>
        <Stack my={3}>
          <Text as="em" fontSize={25} color="#6F38C5" align="center">
            Choose from wide range of products
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
            {state.products &&
              state.products.map((el) => {
                return <ProductCard {...el} key={el.id} />;
              })}
          </Grid>
        </Box>
      </Box>
      <Pagination />
    </Container>
  );
};

export default Product;
