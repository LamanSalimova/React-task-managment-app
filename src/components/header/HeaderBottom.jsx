import { Button, Container, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import AddTask from "../../modals/AddTask";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/searchSlice";

export default function HeaderBottom() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    // Arama sorgusunu güncelle
    dispatch(setSearchQuery(newQuery));
  };
  return (
    <Container maxW="1200px">
      <Flex justify="space-between" py="18px">
        <Flex
          align="center"
          gap="14px"
          bg="var(----clr-gray-bg)"
          border="1px solid var(--clr-secondary)"
          borderRadius="4px"
          py="8px"
          px="19px"
          color="var(--clr-gray)"
        >
          <AiOutlineSearch size={22} />
          <input
            type="text"
            placeholder="Search Items"
            border="none"
            outline="none"
            onChange={handleSearchChange}
          />
        </Flex>
        <AddTask />
      </Flex>
    </Container>
  );
}
