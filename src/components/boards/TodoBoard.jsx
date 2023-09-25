import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import data from "../../data/db.json";
import Task from "../Task";
import { useSelector } from "react-redux";

export default function TodoBoard() {
  const tasks = useSelector((state) => state.tasks);
  const initialToDoTasks = data.tasks?.filter((task) => task.board === "to do");

  const toDoTasks = [
    ...initialToDoTasks,
    ...tasks?.filter((task) => task.board === "to do"),
  ];

  const searchQuery = useSelector((state) => state.search.query);

  const filteredTasks = toDoTasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Stack px="16px" bg="var(--clr-secondary)" borderRadius="5px" pb="40px">
      <Flex justify="center" align="center" gap="10px" my="13px">
        <Text fontSize="15px" fontWeight="700">
          To do
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
          {filteredTasks?.length}
        </Flex>
      </Flex>
      <Stack gap="20px">
        {filteredTasks?.map((task, id) => (
          <Task key={id} task={task} />
        ))}
      </Stack>
    </Stack>
  );
}
