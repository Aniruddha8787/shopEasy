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
      <Box w="50%" h={"120vh"} pt={10} pl={20} m="auto">
        <Text color="grey" fontWeight={600}>
          Enter Your Details to proceed...
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
      </Box>
    </Flex>
  );
};
export default Payment