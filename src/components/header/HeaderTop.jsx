import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
export default function HeaderTop() {
  return (
    <Flex
      justify="center"
      align="center"
      bg="var(--clr-primary)"
      color="var(--clr-light)"
      w="full"
      h="68"
    >
      <Flex
        gap={{ base: "20px", md: "20", lg: "20" }}
        // wrap="wrap"
        // justify={{ base: "center", md: "start" }}
      >
        <Flex gap="10px" align="center">
          <Image src={icon1} objectFit="contain" />
          <Text as="span" fontSize={{ base: "14px", md: "16px" }}>
            Backlog
          </Text>
        </Flex>
        <Flex gap="10px" align="center">
          <Image src={icon2} objectFit="contain" />
          <Text as="span" fontSize={{ base: "14px", md: "16px" }}>
            Board
          </Text>
        </Flex>
        <Flex gap="10px" align="center">
          <Image src={icon3} objectFit="contain" />
          <Text as="span" fontSize={{ base: "14px", md: "16px" }}>
            Feed
          </Text>
        </Flex>
        <Flex gap="10px" align="center">
          <Image src={icon4} objectFit="contain" />
          <Text as="span" fontSize={{ base: "14px", md: "16px" }}>
            Reports
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
