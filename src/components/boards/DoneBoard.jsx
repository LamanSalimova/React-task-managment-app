import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import data from "../../data/db.json";
import Task from "../Task";
import { useSelector } from "react-redux";

export default function DoneBoard() {
  const doneTasks = data.tasks.filter((task) => task.board === "in progress");

  const searchQuery = useSelector((state) => state.search.query);
  const filteredTasks = doneTasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Stack px="16px" bg="var(--clr-secondary)" borderRadius="5px" pb="40px">
      <Flex justify="center" align="center" gap="10px" my="13px">
        <Text fontSize="15px" fontWeight="700">
          Done
        </Text>
        <Flex
          w="30px"
          h="30px"
          bg="var(--clr-gray-bg)"
          borderRadius="50%"
          justify="center"
          align="center"
          fontWeight="700"
        >
          {filteredTasks.length}
        </Flex>
      </Flex>
      <Stack gap="20px">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </Stack>
    </Stack>
  );
}
