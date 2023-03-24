import { Box, Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard";
import Footer from "../../components/Footer/Footer";
import MenuCard from "../../components/MenuCard";
import Navbar from "../../components/Navbar/Navbar";
import MenuService from "../../services/menu";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState([]);

  const fetchAllMenu = async () => {
    const menuResp = await MenuService.findAllMenu();
    setMenu(menuResp.data.data);
  };

  var total = 0;
  menu?.map((item) => {
    if (cart[item.id]) {
      total = total + item.price_per_pcs * cart[item.id];
    } else {
      total = total + 0;
    }
  });

  useEffect(() => {
    fetchAllMenu();
  }, []);

  const handleChangeCart = (id, data) => {
    setCart({ ...cart, [id]: data });

    // localStorage.setItem("cart", cart);
    console.log(cart);
  };
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
            <Heading color="#81b622">Cart</Heading>
          </Box>
          <Box pt="4" display="flex" justifyContent="center">
            <SimpleGrid columns={[1]} spacing="10">
              {menu?.map((val, key) => (
                <CartCard
                  key={key}
                  id={val.id}
                  name={val.name}
                  price={val.price_per_pcs}
                  handleChangeCart={handleChangeCart}
                />
              ))}
            </SimpleGrid>
          </Box>
          <Box py="10">
            <Heading>Total : {total}</Heading>
          </Box>
          <Link to="/orderwithcart" state={total}>
            <Button w="full">Checkout</Button>
          </Link>
        </Container>
      </div>
      <Footer mt="auto" />
    </>
  );
}
