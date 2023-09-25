import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AddMember from "../../modals/AddMember";
import { useDispatch, useSelector } from "react-redux"; // useSelector'ı içe aktarın
import { setAvatars } from "../../redux/userSlice";

export default function Subbar() {
  // const [avatars, setAvatars] = useState(initialAvatars);
  const avatars = useSelector((state) => state.user.avatars);
  const dispatch = useDispatch();

  const handleSetAvatars = (newAvatars) => {
    // Yeni avatarları Redux store'a ayarlamak için dispatch'i kullanın
    dispatch(setAvatars(newAvatars));
  };
  return (
    <Box as="div" bg="var(--clr-secondary)">
      <Container maxW="1200px">
        <Flex
          // justify="space-between"
          py="19px"
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          gap={{ base: "20px", md: "0" }}
        >
          <Flex gap="12px" align="center">
            <Text fontWeight="700" lineHeight="18.75px">
              Product Design Team
            </Text>
            <Flex
              justify="center"
              align="center"
              px="12px"
              py="4px"
              borderRadius="5px"
              bg="var(--clr-primary)"
              color="var(--clr-light)"
            >
              Sprint 9
            </Flex>
          </Flex>
          <Flex gap="20px" align="center">
            <Flex borderRight="2px solid var(--clr-gray)" pr="40px">
              {avatars.map((avatar, index) => (
                <Box
                  mr={-3}
                  key={index}
                  w="34px"
                  h="34px"
                  borderRadius="50%"
                  backgroundImage={`url(${avatar})`}
                  backgroundPosition="center"
                  backgroundSize="cover"
                ></Box>
              ))}
            </Flex>
            <AddMember handleSetAvatars={handleSetAvatars} avatars={avatars} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
