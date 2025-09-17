"use client";
import React from "react";
import styled from "styled-components";
import ProductConfig from "./ProductConfig";
import { ProductAttributeInterface } from "@/interface/ProductAttributeInterface";
import { Product } from "@/services/preview/getProducts";

const Container = styled.div`
  display: flex;
  width: clamp(440px, 33.3vw, 640px);
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const ContainerWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-right: 40px;
`;

export default function ConfigProduct({
  selectedProducts,
  setSelectedProducts = () => undefined,
  products,
}: {
  selectedProducts: ProductAttributeInterface;
  setSelectedProducts: React.Dispatch<
    React.SetStateAction<ProductAttributeInterface>
  >;
  products: Product[];
}) {
  return (
    <Container>
      <ContainerWrapper>
        <ProductConfig
          products={products}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </ContainerWrapper>
    </Container>
  );
}
