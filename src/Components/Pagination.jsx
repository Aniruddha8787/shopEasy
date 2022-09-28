import { Button, HStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppContext } from '../AppContext.jsx/AppContextProvider'
import { pageChange } from '../Reducer/actionCreator';

const Pagination = () => {
    const { state, dispatch } = useContext(AppContext);

    
  return (
    <HStack justifyContent="center">
      <Button
        onClick={() => pageChange("-", dispatch, state)}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
      >
        Prev
      </Button>
      <Button
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
      >
        {state.page}
      </Button>
      <Button
        onClick={() => pageChange("+", dispatch, state)}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
      >
        Next
      </Button>
    </HStack>
  );
}

export default Pagination