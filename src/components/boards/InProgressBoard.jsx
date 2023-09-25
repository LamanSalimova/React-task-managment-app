import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import data from "../../data/db.json";
import Task from "../Task";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
// import { useDispatch } from "react-redux";
// import { addTask } from "../../redux/taskSlice";

export default function InProgressBoard() {
  const inProgressTasks = data.tasks.filter(
    (task) => task.board === "in progress"
  );

  const searchQuery = useSelector((state) => state.search.query);

  const filteredTasks = inProgressTasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // const dispatch = useDispatch();

  const handleDrop = (item) => {
    console.log("Drop item", item);
  };

  return (
    <div ref={drop}>
      <Stack px="16px" bg="var(--clr-secondary)" borderRadius="5px" pb="40px">
        <Flex justify="center" align="center" gap="10px" my="13px">
          <Text fontSize="15px" fontWeight="700">
            In Progress
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
    </div>
  );
}
