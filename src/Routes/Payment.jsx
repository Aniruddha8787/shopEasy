import React, { useState } from "react";
import { Box, Button, Input, Spinner } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [value, setV] = useState(0);
  const [flag, setF] = useState(true);
  const navigate = useNavigate();

  const handle = () => {
    setF(false);

    setTimeout(() => {
      alert("Payment Successfully...");
      navigate("/");
    }, 3000);
  };

  

  return (
    <Flex gap={10} w="100%" textAlign="start" mt={10}>
      <Box w="50%" h={"120vh"} pt={20} pl={20}>
        <Text color="grey" fontWeight={600}>
          Enter Your Details to proceed
        </Text>
        <Text fontWeight={600} mt={10}>
          Secure Payment{" "}
        </Text>
        <Box mt={5} border="3px solid #3B44F6" p={10} borderRadius={10}>
          <Box>
            <label>Name *</label>
            <Input></Input>
          </Box>

          <Box mt={5}>
            <label>Email *</label>
            <Input></Input>
          </Box>

          <Box mt={5}>
            <label>Name on Card *</label>
            <Input></Input>
          </Box>

          <Box mt={5}>
            <label>Card Details *</label>
            <Input></Input>
          </Box>
          <Box mt={5}>
            <label>Card CVV *</label>
            <Input></Input>
          </Box>
        </Box>
      </Box>
      <Box w="40%" h={"120vh"} pl={20} pt={20} pr={20} bg="#f5f5f5" mb={10}>
        <Text fontWeight={700}>Price Details :</Text>

        <Box mt={5}>
          <hr color="#C70A80" />
        </Box>

        <Flex justifyContent="space-between" mt={10} alignItms="center">
          <Text fontSize="xl">Price :</Text>
          <Box>
            <Text>{`${value} $`}</Text>
          </Box>
        </Flex>
        <Flex justifyContent="space-between" mt={10} alignItms="center">
          <Text fontSize="xl">Discount (5%) :</Text>
          <Box>
            <Text>{`${value} $`}</Text>
          </Box>
        </Flex>

        <Flex justifyContent="space-between" mt={10} alignItms="center">
          <Text fontWeight={700} fontSize="2xl">
            Total :
          </Text>
          <Box>
            <Text>{`${value} $`}</Text>
          </Box>
        </Flex>

        <Flex mt={7} gap={5}>
          <input type="checkbox" />
          <Text>
            I agree to the Terms of Use and have read and understand the Privacy
            Policy
          </Text>
        </Flex>

        <Button
          w="100%"
          borderRadius={"none"}
          background="#e51075"
          color="white"
          mt={10}
          onClick={handle}
        >
          {flag ? "SUBMIT PAYMENT" : <Spinner />}
        </Button>
      </Box>
    </Flex>
  );
};
export default Payment