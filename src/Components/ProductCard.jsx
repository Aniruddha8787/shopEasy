import {
  Flex,

  Box,
  Image,
  useColorModeValue,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import {Link, useNavigate } from "react-router-dom"
import { AppContext } from "../AppContext.jsx/AppContextProvider";
import { addToCart } from "../Reducer/actionCreator";



function Rating({ rating, numReviews }) {
  return (
    <HStack d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </HStack>
  );
}

function ProductAddToCart({ id, title, price, category, image, rating }) {
  
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();










  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
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
        <Link to={`/product/${id}`}>
          <Image
            src={image}
            alt={`Picture of ${title}`}
            roundedTop="lg"
            h="300px"
            m="auto"
            p={3}
          />
        </Link>

        <Box p="6" justifyContent="center">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color="#937DC2"
            >
              {title}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" my={1}>
            <Box>
              <Text fontSize="lg" color="#590696">
                {category}
              </Text>
            </Box>
            <Box fontSize="2xl">
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {price}
            </Box>
          </Flex>
          <Rating rating={rating.rate} numReviews={rating.count} />

          <Box justifyContent="center">
            <Button
              margin="auto"
              alignItems="center"
              my={3}
              mx={14}
              bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
              onClick={() =>
                addToCart(
                  { id, title, price, category, image, rating, Qty: 1 },
                  dispatch,
                  state.isAuth,
                  navigate
                )
              }
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
