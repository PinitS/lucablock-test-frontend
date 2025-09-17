"use client";
import { ProductAttributeInterface } from "@/interface/ProductAttributeInterface";
import { Product } from "@/services/preview/getProducts";
import React, { useState } from "react";
import styled from "styled-components";
import ConfigProduct from "../ConfigProduct";
import OverviewProduct from "../OverviewProduct";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const DEFAULT_PRODUCT_ATTRIBUTE = {
  size: { w: 80, l: 80, h: 150 },
  material: "อาร์ตมัน 300 แกรม",
  coating: "ไม่เคลือบ",
  specialTechnique: null,
  quantity: {
    value: 100,
    unitPrice: 8.5,
    totalPrice: 850,
  },
  proof: {
    value: "Soft and Online Proof",
    price: 0,
  },
  delivery: { method: "รับสินค้าด้วยตัวเอง", postcode: null },
  summaryPrice: 850,
  productionTime: {
    finishDate: "2024-07-12",
    price: 0,
  },
};

export default function ProductOrder({ products }: { products: Product[] }) {
  const defaultSelectProduct: ProductAttributeInterface = {
    ...DEFAULT_PRODUCT_ATTRIBUTE,
    productId: products[1].id,
    productName: products[1].name,
    productImgPath: products[1].imgPath,
  };

  const [selectedProducts, setSelectedProducts] =
    useState<ProductAttributeInterface>(defaultSelectProduct);

  return (
    <Container>
      <OverviewProduct selectedProducts={selectedProducts} />
      <ConfigProduct
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        products={products}
      />
    </Container>
  );
}
