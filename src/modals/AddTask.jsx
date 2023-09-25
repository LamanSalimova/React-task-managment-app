import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { useState } from "react";

export default function AddTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const names = useSelector((state) => state.user.names);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignee, setAssignee] = useState("");

  const tasks = useSelector((state) => state.tasks);

  const handleSave = () => {
    const newTask = {
      name,
      description,
      date,
      assignee,
      board: "to do",
    };
    console.log(newTask, "newTask");

    dispatch(addTask(newTask));
    setName("");
    setDescription("");
    setDate("");
    setAssignee("");
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} bg="var(--clr-primary)" color="var(--clr-light)">
        New Item
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="20px">
              <Input
                id="first-name"
                placeholder="Name"
                bg="#F5F7FB"
                py="28px"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Textarea
                placeholder="Desciption"
                bg="#F5F7FB"
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Input
                id="date"
                type="date"
                bg="#F5F7FB"
                py="28px"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Select
                placeholder="Assigne"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
              >
                {names?.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose} px={10}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleSave} px={10}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
