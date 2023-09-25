import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
  FocusLock,
  Text,
  Stack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../redux/userSlice";

const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  );
});

const Form = ({ firstFieldRef, onCancel, onAddMember, setName, setImage }) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);
      setImage(imageURL);
    }
  };
  return (
    <Stack spacing={4} py={3}>
      <Text
        color="var(--clr-dark2)"
        fontSize="25px"
        lineHeight="32px"
        fontWeight="700"
      >
        New Member
      </Text>

      <FormControl>
        <Input
          id="first-name"
          placeholder="Name"
          bg="#F5F7FB"
          py="28px"
          fontSize="18px"
          color="var(--clr-dark2)"
          fontWeight="600"
          ref={firstFieldRef}
          onChange={handleNameChange}
        />
      </FormControl>
      <FormControl>
        <Flex
          justify="center"
          align="center"
          position="relative"
          gap="40px"
          my="20px"
          py="16px"
          bg="#F5F7FB"
          border="1px solid #cbd5e0"
          borderRadius="4px"
        >
          <FiUpload className="uploadIcon" />
          <Text fontSize="18px" color="var(--clr-dark2)" fontWeight="600">
            Upload Photo
          </Text>
          <Input
            type="file"
            id="image"
            accept="image/*"
            fontSize="18px"
            color="var(--clr-dark2)"
            fontWeight="600"
            my="10px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            cursor="pointer"
            opacity="0"
            w="100%"
            onChange={handleImageChange}
          />
        </Flex>
      </FormControl>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Text
          variant="outline"
          as="span"
          bg="#F5F7FB"
          color="#15192080"
          fontWeight="600"
          fontSize="18px"
          borderRadius="11px"
          px="36px"
          py="10px"
          cursor="pointer"
          onClick={onCancel}
        >
          Cancel
        </Text>
        <Text
          as="span"
          bg="var(--clr-primary)"
          color="var(--clr-light)"
          fontWeight="600"
          fontSize="18px"
          borderRadius="11px"
          px="36px"
          py="10px"
          cursor="pointer"
          onClick={onAddMember}
        >
          Save
        </Text>
      </ButtonGroup>
    </Stack>
  );
};

export default function AddMember({ handleSetAvatars, avatars }) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  const dispatch = useDispatch();
  const names = useSelector((state) => state.user.names);

  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberImage, setNewMemberImage] = useState("");
  const [members, setMembers] = useState([]);

  const addNewMember = () => {
    if (newMemberName && newMemberImage) {
      const newMember = {
        name: newMemberName,
        image: newMemberImage,
      };
      console.log(newMemberName);

      setMembers([newMember, ...members]);

      handleSetAvatars([newMemberImage, ...avatars]);
      dispatch(setName([...names, newMemberName]));

      onClose();
    }
  };
  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Text fontWeight="500" color="var(--clr-primary)" cursor="pointer">
            + New Member
          </Text>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form
              firstFieldRef={firstFieldRef}
              onCancel={onClose}
              onAddMember={addNewMember}
              setName={setNewMemberName}
              setImage={setNewMemberImage}
            />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
}
