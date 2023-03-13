import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MenuCard from "../../components/MenuCard";
import MenuService from "../../services/menu";

const OrderNow = () => {
  const [menu, setMenu] = useState([]);

  const fetchAllMenu = async () => {
    const menuResp = await MenuService.findAllMenu();
    setMenu(menuResp.data.data);
  };

  useEffect(() => {
    fetchAllMenu();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Container
          maxW="container.lg"
          minHeight="100vh"
          display="flex"
          flexDirection="column"
        >
          <Box>
            <Heading color="#81b622">The Yard Ubud</Heading>
          </Box>
          <Box pt="4" display="flex" justifyContent="center">
            <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing="10">
              {menu?.map((val, key) => (
                <MenuCard
                  key={key}
                  id={val.id}
                  title={val.name}
                  description={val.description}
                  price={val.price_per_pcs}
                  imageUrl={val.image_url}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </div>
      <Footer mt="auto" />
    </>
  );
};

export default OrderNow;
