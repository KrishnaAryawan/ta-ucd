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
import RoomService from "../../services/room";
import { PostTransaction } from "../../services/transaction";
import { IDRConvert } from "../../utils/IDRConvert";

export default function PesanPage() {
  const { id } = useParams();
  const toast = useToast();
  const [room, setRoom] = useState({});
  const [inputData, setInputData] = useState({
    name: "",
    days: 1,
    total: 0,
    payment: "",
  });

  const findRooms = async (selectedId) => {
    const roomResp = await RoomService.findRoomById(selectedId);
    setRoom(roomResp.data.data);
  };

  useEffect(() => {
    if (!id) return;
    findRooms(id);
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
      room_id: id,
      total: room.price_per_day * inputData.days,
    }).then(() => {
      toast({
        title: "Pemesanan Berhasil Ditambahkan",
        description:
          "Terimakasih Sudah memesan di tempat kami :), Mohon tunggu sebentar untuk mengkonfirmasi lewat Whatsapp",
      });
      if (inputData.payment === "Cash") {
        window.location.replace(
          "https://api.whatsapp.com/send?phone=6282236354911&text=Halo%20Abhisrama%20Guest%20House%2C%20saya%20ingin%20melakukan%20konfirmasi%20pemesanan%20kamar%20atas%20nama%20" +
            inputData.name +
            "%20dengan%20pembayaran%20via%20cash."
        );
      }
      if (inputData.payment === "Transfer") {
        window.location.replace("/pesan/norek");
      }
    });
  };
  console.log(inputData);

  return (
    <Container maxW="container.md" py="8">
      <Heading pb="9">Pemesanan : {room.name}</Heading>
      <Divider />
      <Stack spacing={6} py="5">
        <FormControl>
          <FormLabel>Nama</FormLabel>
          <Input
            type="text"
            name="name"
            value={inputData.name}
            onChange={handleChangeData}
          />
        </FormControl>
        <FormControl w="40">
          <FormLabel>Jumlah Hari</FormLabel>
          <Input
            name="days"
            value={inputData.days}
            onChange={handleChangeData}
            type="number"
          ></Input>
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Pembayaran</FormLabel>
          <RadioGroup
            name="payment"
            value={inputData.payment}
            onChange={(val) => handleChangeDataPayment(val)}
          >
            <HStack spacing="24px">
              <Radio value="Cash">Cash</Radio>
              <Radio value="Transfer">Transfer</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Divider />

        <Text fontSize="2em" fontWeight="bold">
          Total : {IDRConvert.format(room.price_per_day * inputData.days)}
        </Text>
        <Button
          disabled={!inputData.days || !inputData.name || !inputData.payment}
          onClick={handleSubmitPesan}
        >
          Pesan
        </Button>
      </Stack>
    </Container>
  );
}
