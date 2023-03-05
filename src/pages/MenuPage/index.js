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
import MenuService from "../../services/menu";
import { AiOutlineArrowLeft } from "react-icons/ai";
import theyardAxios from "../../services/_init";
import { IDRConvert } from "../../utils/IDRConvert";

const MenuPage = () => {
  const [menu, setMenu] = useState({});
  const { id } = useParams();

  const findMenu = async (selectedId) => {
    const menuResp = await MenuService.findMenuById(selectedId);
    setMenu(menuResp.data.data);
  };

  useEffect(() => {
    findMenu(id);
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
              <Image src={menu.image_url} objectFit="cover" h="full" w="full" />
            </Box>
          </GridItem>
          <GridItem px="4">
            <Heading size="lg">{menu.name}</Heading>
            <Text color="teal" fontWeight="medium" fontSize={"3em"}>
              {IDRConvert.format(menu.price_per_pcs) + "/jumlah"}
            </Text>
            <Text>{menu.description}</Text>
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

export default MenuPage;
