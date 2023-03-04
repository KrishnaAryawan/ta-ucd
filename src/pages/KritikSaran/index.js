import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { PostSaran } from "../../services/saran";

export default function KritikSaran() {
  const [data, setData] = useState({
    name: "",
    saran: "",
  });
  const toast = useToast();

  const handleSubmitSaran = () => {
    PostSaran(data)
      .then((res) => {
        console.log(res);
        toast({
          title: "Kritik / Saran berhasil diinput",
          description: "Terimakasih sudah menginput kritik atau saran",
          isClosable: true,
        });
      })
      .catch((e) => console.log(e));
  };
  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <Container maxW="container.md">
      <Box py="10">
        <Stack spacing="4">
          <Heading>Kritik Dan Saran</Heading>
          <FormControl>
            <FormLabel>Nama</FormLabel>
            <Input type="text" name="name" onChange={handleChangeData} />
          </FormControl>
          <FormControl>
            <FormLabel>Kritik atau Saran</FormLabel>
            <Textarea type="text" name="saran" onChange={handleChangeData} />
          </FormControl>
          <Button
            disabled={!data.name || !data.saran}
            onClick={handleSubmitSaran}
          >
            Kirim
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
