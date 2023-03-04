import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RoomService from "../../services/room";
import { AiOutlineArrowLeft } from "react-icons/ai";
import abhisAxios from "../../services/_init";
import { IDRConvert } from "../../utils/IDRConvert";
import { SiWhatsapp } from "react-icons/si";

const RoomPage = () => {
  const [room, setRoom] = useState({});
  const { id } = useParams();

  const findRooms = async (selectedId) => {
    const roomResp = await RoomService.findRoomById(selectedId);
    setRoom(roomResp.data.data);
  };

  useEffect(() => {
    findRooms(id);
  }, [id]);

  return (
    <Container maxW="container.md">
      <Box pt="10">
        <Link to="/">
          <Button variant="link" leftIcon={<AiOutlineArrowLeft />}>
            Kembali
          </Button>
        </Link>
        <Grid pt="2" templateColumns="repeat(1,1fr)">
          <GridItem>
            <Box bgColor="gray" w="50vw" h="96" rounded="xl" overflow="hidden">
              <Image src={room.image_url} objectFit="cover" h="full" w="full" />
            </Box>
          </GridItem>
          <GridItem px="4">
            <Heading size="lg">{room.name}</Heading>
            <Text color="teal" fontWeight="medium" fontSize={"3em"}>
              {IDRConvert.format(room.price_per_day) + "/hari"}
            </Text>
            <Text>{room.description}</Text>
          </GridItem>
          <GridItem display="flex" justifyContent="end">
            <Link to={"/pesan/" + id}>
              <Button colorScheme="green" display="flex" alignItems="center">
                Pesan
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default RoomPage;
