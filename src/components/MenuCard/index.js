import { Box, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IDRConvert } from "../../utils/IDRConvert";

const MenuCard = ({ id, title, description, price, imageUrl }) => {
  return (
    <Link to={"/ordernow/" + id}>
      <Box
        w="80"
        h="md"
        bgColor="white"
        boxShadow="dark-lg"
        rounded="3xl"
        overflow="hidden"
      >
        <Box>
          <Box bgColor="#3d550c" w="full" h="52" overflow="hidden">
            <Image src={imageUrl} objectFit="cover" h="full" w="full" />
          </Box>
        </Box>
        <Box px="8" pt="4" display="flex" flexDir="column">
          <Box>
            <Heading size="md" pt="2">
              {title}
            </Heading>
            <Text fontSize="sm" pt="2" h="28" overflow="hidden">
              {description}
            </Text>
          </Box>
          <Text fontSize="lg" textColor="teal" fontWeight="semibold">
            {IDRConvert.format(price) + "/jumlah"}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default MenuCard;
