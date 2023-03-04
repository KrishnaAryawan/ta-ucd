import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NoRek() {
  return (
    <Container maxW="container.md" py="5">
      <Box display="flex" justifyContent="center" alignItems="center" h="70vh">
        <Stack
          spacing={2}
          p="10"
          border="1px solid whitesmoke"
          borderRadius="10px"
          boxShadow="lg"
          backgroundColor="blue.100"
        >
          <Text fontSize="1.5em">
            Rekening BCA a/n. I Gusti Agung Gde Abhirama Adnyana
          </Text>
          <Text fontSize="1.5em">No Rekening : 7730412040</Text>
        </Stack>
      </Box>
      <Box display="flex" justifyContent="end">
        <a href="https://api.whatsapp.com/send?phone=6282236354911&text=Halo%20Abhisrama%20Guest%20House%2C%20saya%20ingin%20melakukan%20konfirmasi%20sekaligus%20mengirimkan%20bukti%20transfer%20pemesanan%20kamar%20atas%20nama%20%3Cnama%3E%20%0A%20dengan%20pembayaran%20via%20transfer.">
          <Button colorScheme="green">Konfirmasi</Button>
        </a>
      </Box>
    </Container>
  );
}
