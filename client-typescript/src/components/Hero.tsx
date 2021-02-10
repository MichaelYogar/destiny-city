import React from "react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Search from "./Search";
import { Image } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Box
      d="flex"
      flexDirection={{ sm: "column", md: "row" }}
      justifyContent="space-around"
      alignItems={{ sm: "center" }}
      paddingTop="15rem"
    >
      <Box maxW="50%">
        <Heading fontSize={{ base: "1.3rem", md: "20px", lg: "30px" }}>
          Where To Work
        </Heading>
        <Text fontSize={{ base: "0.7rem", md: "15px", lg: "20px" }}>
          A Compass For the Tech Industry
        </Text>
        <Search />
      </Box>
      <Box maxW="50%">
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Box>
    </Box>
  );
};

export default Hero;
