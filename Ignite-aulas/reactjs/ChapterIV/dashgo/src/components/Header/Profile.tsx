import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Amós Rodrigues</Text>
        <Text color="gray.300" fontSize="small">
          amos@amos.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Amós Rodrigues"
        src="https://github.com/amos-rodrigues-dev.png"
      />
    </Flex>
  );
}
