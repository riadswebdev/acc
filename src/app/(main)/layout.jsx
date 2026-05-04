import TopBooksMarque from "@/components/marque/TopBooksMarque";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <TopBooksMarque />
      {children}
    </>
  );
};

export default MainLayout;
