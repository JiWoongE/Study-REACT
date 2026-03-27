import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode.jsx";

export default function Ex01_Box() {
  const cardBg = useColorModeValue("white", "blue.800"); // 라이트: 흰색, 다크: 어두운 파랑

  return (
    <>
      <Box p={6} bg={cardBg} rounded="md">
        <Text>Box는 기본 컨테이너</Text>
      </Box>
      <Box p={6} bg={{ base: "green.500", _dark: "red.500" }} rounded="md">
        <Text>Box는 기본 컨테이너</Text>
      </Box>
    </>
  );
}
