import { Box } from "@chakra-ui/layout";
import React from "react";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box py="20">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
