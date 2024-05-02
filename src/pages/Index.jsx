import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" color={useColorModeValue("gray.700", "white")} textAlign={["center", "center", "left", "left"]}>
            Innovative Solutions for Your Business
          </Heading>
          <Heading as="h2" size="md" color={useColorModeValue("gray.800", "gray.200")} opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Harness the power of technology to streamline your operations and boost your productivity.
          </Heading>
          <Button
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            rightIcon={<FaArrowRight />}
            colorScheme="teal"
            variant="solid"
            boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%)"
            _hover={{
              boxShadow: "0px 5px 25px -5px rgb(66 153 225 / 48%)",
            }}
          >
            Get Started
          </Button>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzE0NTkzMTU1fDA&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
