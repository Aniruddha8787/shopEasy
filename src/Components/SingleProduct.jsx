import React, { useContext, useEffect } from "react";
import { getSingleProduct } from "../Reducer/actionCreator";
import {
  Container,
} from "@chakra-ui/react";

import { AppContext } from "../AppContext.jsx/AppContextProvider";
import { useParams } from 'react-router-dom'
import SingleCard from "./SingleCard";

export default function Simple() {
    const { state, dispatch } = useContext(AppContext);
    const id = useParams();
    

    useEffect(() => {
        getSingleProduct(dispatch, id);
    },[])

    

  return (
    <Container maxW={"7xl"}>
      {/* {state.isprodLoading && (
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
          )} */}
          {state.singleProduct && <SingleCard {...state.singleProduct} />}
        
    </Container>
  );
}