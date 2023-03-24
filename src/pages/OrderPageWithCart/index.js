import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MenuService from "../../services/menu";
import {
  PostTransaction,
  PostTransactionWithoutID,
} from "../../services/transaction";
import { IDRConvert } from "../../utils/IDRConvert";

export default function OrderPageWithCart() {
  const toast = useToast();
  const location = useLocation();
  const [menu, setMenu] = useState({});
  const [inputData, setInputData] = useState({
    name: "",
    payment: "",
  });

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleChangeDataPayment = (value) => {
    setInputData({ ...inputData, payment: value });
  };

  const handleSubmitPesan = () => {
    PostTransactionWithoutID({
      ...inputData,
      total: location.state,
    }).then(() => {
      toast({
        title: "Pemesanan Berhasil Ditambahkan",
        description:
          "Terimakasih sudah berkunjung ke tempat kami :), Mohon tunggu sebentar untuk mengkonfirmasi lewat Whatsapp",
      });
      if (inputData.payment === "Cash") {
        window.location.replace(
          "https://api.whatsapp.com/send?phone=6281236827266&text=Hello%20The%20Yard%20Ubud%20I%20would%20like%20to%20order%20" +
            "total" +
            location.state +
            " " +
            "The order from" +
            " " +
            inputData.name +
            "%20with%20payment%20via%20cash."
        );
      }
      if (inputData.payment === "Transfer") {
        window.location.replace("//norek");
      }
    });
  };
  console.log(inputData);

  return (
    <>
      <Navbar></Navbar>
      <Container maxW="container.md" py="8">
        <Heading pb="9">Order : {menu.name}</Heading>
        <Divider />
        <Stack spacing={6} py="5">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={inputData.name}
              onChange={handleChangeData}
            />
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Payment</FormLabel>
            <RadioGroup
              name="payment"
              value={inputData.payment}
              onChange={(val) => handleChangeDataPayment(val)}
            >
              <HStack spacing="24px">
                <Radio value="Cash">Cash</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Divider />

          <Text mt="10px" fontSize="1.5em" fontWeight="bold" align="right">
            Total : {IDRConvert.format(location.state)}
          </Text>
          <Button
            backgroundColor="#81b622"
            disabled={!inputData.name || !inputData.payment}
            onClick={handleSubmitPesan}
          >
            Order
          </Button>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
