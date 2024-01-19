import Layout from "@/Layout";
import React from "react";
import "tailwindcss/tailwind.css";
import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <Layout>
      <div className="h-screen">
        <Carousel />
      </div>
    </Layout>
  );
};

export default page;
