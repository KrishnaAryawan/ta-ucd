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
  SimpleGrid,
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
  console.log(location.state);
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    payment: "",
  });

  const fetchAllMenu = async () => {
    const menuResp = await MenuService.findAllMenu();
    setMenu(menuResp.data.data);
  };

  useEffect(() => {
    fetchAllMenu();
  }, []);

  useEffect(() => {
    if (!menu) return;
    const arr2 = Object.keys(location.state?.cart).map((key) => Number(key));
    const res = menu?.filter((item) => {
      return arr2.includes(item.id);
    });
    setCart(res);
    // console.log(menu);
    console.log(res);
    // console.log(arr2);
  }, [menu]);

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
      total: location.state?.total,
    }).then(() => {
      toast({
        title: "Pemesanan Berhasil Ditambahkan",
        description:
          "Terimakasih sudah berkunjung ke tempat kami :), Mohon tunggu sebentar untuk mengkonfirmasi lewat Whatsapp",
      });
      if (inputData.payment === "Cash") {
        window.location.replace(
          "https://api.whatsapp.com/send?phone=6281236827266&text=Hello%20The%20Yard%20Ubud%20I%20would%20like%20to%20order%20" +
            cart?.map(
              (item) =>
                item.name + " " + location.state?.cart[item.id] + " pcs "
            ) +
            " " +
            "total" +
            " " +
            IDRConvert.format(location.state?.total) +
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
        <Heading pb="9">Order :</Heading>
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

          {cart?.map((item) => (
            <SimpleGrid columns={2}>
              <Text>{item.name}</Text>
              <Text>{location.state?.cart[item.id]}</Text>
            </SimpleGrid>
          ))}
          <Text mt="10px" fontSize="1.5em" fontWeight="bold" align="right">
            Total : {IDRConvert.format(location.state?.total)}
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
