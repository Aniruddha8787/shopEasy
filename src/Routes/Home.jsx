import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Container, HStack, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext.jsx/AppContextProvider';
import { getSliderimg, slideChange } from '../Reducer/actionCreator';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getSliderimg(dispatch);
    slideChange(dispatch);
  }, []);

  return (
    <Container my={3} maxW="container.mm">
      <Box w="80%" m="auto">
        <Stack my={3}>
          <Text as="b" fontSize={30} color="#6F38C5" align="center">
            Welcome To ShopEasy
          </Text>
        </Stack>
        <Box w="100%" m="auto" my={10}>
          {state.slides && (
            <HStack w="100%" m="auto" justifyContent="center" my={5}>
              <IconButton onClick={() => slideChange("left", dispatch, state)}>
                <ArrowBackIcon />
              </IconButton>
              <Box>
                <Image
                  src={state.slides[state.current]}
                  border="solid 5px #172774"
                  borderRadius={15}
                  height={400}
                  width={700}
                />
              </Box>
              <IconButton onClick={() => slideChange("right", dispatch, state)}>
                <ArrowForwardIcon />
              </IconButton>
            </HStack>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default Home