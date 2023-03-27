import { Box, IconButton, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function CartCard({ id, name, price, qty, handleChangeCart }) {
  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      border="1px solid gray"
      p="5"
      borderRadius="10px"
    >
      <Text fontWeight={700}>{name}</Text>
      <Text>{price}</Text>
      <Box display="flex" minWidth="80vw">
        Pcs :
        <Input
          w="20"
          marginLeft="10px"
          type="number"
          onChange={(e) => handleChangeCart(id, e.target.value)}
        ></Input>
      </Box>
    </SimpleGrid>
  );
}
