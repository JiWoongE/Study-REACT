import { Box, Button, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";

export default function Ex02_Stack() {
  const cardBg = useColorModeValue("blue.500", "blue.700");
  const buttonBg = useColorModeValue("red.700", "red.200");

  return (
    <Box p={6} bg={cardBg} rounded="2xl">
      <Stack gap={3}>
        <Button bg={buttonBg}>기본버튼</Button>
        <Button bg={buttonBg} variant="outline">
          아웃라인
        </Button>
      </Stack>
    </Box>
  );
}
