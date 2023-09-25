import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import TodoBoard from "./TodoBoard";
import InProgressBoard from "./InProgressBoard";
import InReviewBoard from "./InReviewBoard";
import DoneBoard from "./DoneBoard";

export default function Board() {
  return (
    <Container maxW="1200px">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap="20px"
      >
        <GridItem w="100%">
          <TodoBoard />
        </GridItem>
        <GridItem w="100%">
          <InProgressBoard />
        </GridItem>
        <GridItem w="100%">
          <InReviewBoard />
        </GridItem>
        <GridItem w="100%">
          <DoneBoard />
        </GridItem>
      </Grid>
    </Container>
  );
}
