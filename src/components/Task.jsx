import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidTimeFive } from "react-icons/bi";
// import { useDrag } from "react-dnd";

export default function Task({ task, props }) {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "task",
  //   item: {
  //     id: task.id,
  //     board: task.board,
  //     description: task.description,
  //     name: task.name,
  //     assignee: task.assignee,
  //     date: task.date,
  //   },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  // console.log(isDragging);

  const dragStarted = (e, id) => {
    console.log("Drag has started");
    console.log(task.id);
    e.dataTransfer.setData("todoId", id);
  };

  return (
    <div draggable onDragStart={(e) => dragStarted(e, task.id)}>
      <Stack
        bg="var(--clr-light)"
        p={3}
        borderRadius="5px"
        gap={4}
        box-shadow="0px 1px 2px 0px #00000026"
      >
        <Text color="var( --clr-gray-text)" fontSize="15px" fontWeight="500">
          {task.name}
        </Text>
        <Text color="var( --clr-gray-text)" fontSize="15px" fontWeight="500">
          {task.description}
        </Text>
        <Flex
          justify="center"
          align="center"
          w="120px"
          h="28px"
          fontSize="12px"
          px={2}
          py={2}
          borderRadius="5px"
          bg="var(--clr-primary)"
          color="var(--clr-light)"
        >
          {task.assignee}
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          pt="12px"
          borderTop="2px solid var(--clr-secondary)"
        >
          <Flex gap="4px" align="center">
            <BiSolidTimeFive size={22} />
            <Text as="span" fontSize="15px" fontWeight="700">
              {task.date}
            </Text>
          </Flex>
          <Box
            as="div"
            w="34px"
            h="34px"
            borderRadius="50%"
            backgroundImage={`url(${task.img})`}
            backgroundPosition="center"
            backgroundSize="cover"
          ></Box>
        </Flex>
      </Stack>
    </div>
  );
}
