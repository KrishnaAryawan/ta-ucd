import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import MenuService from "../../services/menu";
import { PostTransaction } from "../../services/transaction";
import { IDRConvert } from "../../utils/IDRConvert";

export default function OrderPage() {
  const { id } = useParams();
  const toast = useToast();
  const [menu, setMenu] = useState({});
  const [inputData, setInputData] = useState({
    name: "",
    pcs: 1,
    total: 0,
    payment: "",
  });

  const findMenu = async (selectedId) => {
    const menuResp = await MenuService.findMenuById(selectedId);
    setMenu(menuResp.data.data);
  };

  useEffect(() => {
    if (!id) return;
    findMenu(id);
  }, [id]);

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleChangeDataPayment = (value) => {
    setInputData({ ...inputData, payment: value });
  };

  const handleSubmitPesan = () => {
    PostTransaction({
      ...inputData,
      menu_id: id,
      total: menu.price_per_pcs * inputData.pcs,
    }).then(() => {
      toast({
        title: "Pemesanan Berhasil Ditambahkan",
        description:
          "Terimakasih sudah berkunjung ke tempat kami :), Mohon tunggu sebentar untuk mengkonfirmasi lewat Whatsapp",
      });
      if (inputData.payment === "Cash") {
        window.location.replace(
          "https://api.whatsapp.com/send?phone=6281236827266&text=Hello%20The%20Yard%20Ubud%20I%20would%20like%20to%20order" +
            " " +
            menu.name +
            " " +
            inputData.pcs +
            "pcs" +
            " " +
            "total" +
            " " +
            menu.price_per_pcs * inputData.pcs +
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
          <FormControl w="40">
            <FormLabel>Pcs</FormLabel>
            <Input
              name="pcs"
              value={inputData.pcs}
              onChange={handleChangeData}
              type="number"
            ></Input>
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
            Total : {IDRConvert.format(menu.price_per_pcs * inputData.pcs)}
          </Text>
          <Button
            backgroundColor="#81b622"
            disabled={!inputData.pcs || !inputData.name || !inputData.payment}
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
