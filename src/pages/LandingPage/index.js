import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard";
import RoomService from "../../services/room";

const LandingPage = () => {
  const [rooms, setRooms] = useState([]);

  const fetchAllRooms = async () => {
    const roomsResp = await RoomService.findAllRooms();
    setRooms(roomsResp.data.data);
  };

  useEffect(() => {
    fetchAllRooms();
  }, []);

  return (
    <Container maxW="container.lg">
      <Box>
        <Heading color="gray.500">Abhisrama Guest House</Heading>
      </Box>
      <Box pt="4" display="flex" justifyContent="center">
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing="10">
          {rooms.map((val, key) => (
            <RoomCard
              key={key}
              id={val.id}
              title={val.name}
              description={val.description}
              price={val.price_per_day}
              imageUrl={val.image_url}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default LandingPage;
