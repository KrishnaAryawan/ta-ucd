import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import { TbMapSearch } from "react-icons/tb";

const Navbar = () => {
  return (
    <Box
      w="full"
      bgColor="white"
      boxShadow="sm"
      zIndex={100}
      py="4"
      position="fixed"
    >
      <Container maxW="container.lg">
        <SimpleGrid columns={[1, 2]}>
          <Box>
            <Link to="/">
              <Heading size="md" color="gray">
                Abhisrama Guest House
              </Heading>
            </Link>
          </Box>
          <Box display="flex" justifyContent="end" alignItems="center" gap={1}>
            <a href="https://api.whatsapp.com/send?phone=6282236354911&text=Halo%20Abhisrama%20Guest%20House%2C%20saya%20ingin%20memesan%20kamar%20apakah%20ada%3F">
              <Button variant="ghost" display="flex" alignItems="center">
                <SiWhatsapp color="green" />
                <Text pl="1" color="green.600">
                  Whatsapp
                </Text>
              </Button>
            </a>

            <a href="https://goo.gl/maps/5qjhLC4pH1HGWwRHA">
              <Button variant="ghost" display="flex" alignItems="center">
                <TbMapSearch color="blue" />
                <Text pl="1" color="blue.600">
                  Maps
                </Text>
              </Button>
            </a>

            <a href="/kritik-saran">
              <Button colorScheme="gray">Kritik & Saran</Button>
            </a>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Navbar;
