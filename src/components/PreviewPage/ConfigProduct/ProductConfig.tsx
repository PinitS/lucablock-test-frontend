import { Text } from "@/components/Text";
import { ProductAttributeInterface } from "@/interface/ProductAttributeInterface";
import { Product } from "@/services/preview/getProducts";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import ICON_APPS from "@/assets/svgs/ICON_APPS.svg";
import { DEFAULT_PRODUCT_ATTRIBUTE } from "../ProductOrder";

const Container = styled.div`
  width: 100%;
  padding: 0px 24px 0px 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 0px 25px 0px #0000000d;
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
`;

const ContainerDescription = styled.div`
  height: 80px;
  padding: 8px;
  box-shadow: 0px 0px 10px 0px #0000000a;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  aspect-ratio: 1;
  border-radius: 8px;
  background-color: #eef3ff;
`;

const GroupDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const ContainerSelectProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(12px, 1.25vw, 24px);
  padding-top: 26px;
  padding-bottom: 26px;
`;

const ContainerSelectProductItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

const ContainerProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

export default function ProductConfig({
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("selectedProducts :>> ", selectedProducts);
  return (
    <Container>
      <ContainerHeader onClick={() => setIsOpen((prev) => !prev)}>
        <Text as="span" $fontSize={12} $fontWeight={700} $color={"#000000"}>
          สินค้า
        </Text>
        <Text as="span" $fontSize={12} $fontWeight={400} $color={"#000000"}>
          {selectedProducts.productName}
        </Text>
      </ContainerHeader>
      {isOpen && (
        <>
          <ContainerDescription>
            <GroupDescription>
              <ContainerImage>
                <Image
                  src={selectedProducts.productImgPath}
                  alt={selectedProducts.productName}
                  fill
                  style={{
                    objectFit: "contain",
                    borderRadius: "inherit",
                    padding: 8,
                  }}
                />
              </ContainerImage>
              <div className="flex-col">
                <Text
                  as="h1"
                  $fontSize={24}
                  $lineHeight={26}
                  $fontWeight={700}
                  $color={"#000000"}
                >
                  Tuck end box
                </Text>
                <Text
                  as="span"
                  $fontSize={12}
                  $lineHeight={16}
                  $fontWeight={400}
                  $color={"#000000"}
                >
                  บรรจุภัณฑ์
                </Text>
              </div>
            </GroupDescription>
            <ICON_APPS />
          </ContainerDescription>
          <ContainerSelectProduct>
            {products.map((item, index) => {
              const isActive = item.id === selectedProducts.productId;
              return (
                <ContainerSelectProductItem
                  key={index}
                  onClick={() =>
                    setSelectedProducts({
                      ...DEFAULT_PRODUCT_ATTRIBUTE,
                      productId: item.id,
                      productName: item.name,
                      productImgPath: item.imgPath,
                    })
                  }
                >
                  <ContainerProductImageWrapper>
                    <Image
                      src={item.imgPath}
                      alt={item.name}
                      fill
                      style={{
                        objectFit: "contain",
                        borderRadius: "inherit",
                        padding: 12,
                      }}
                    />
                  </ContainerProductImageWrapper>
                  <Text
                    as="span"
                    $fontSize={14}
                    $fontWeight={400}
                    $color={isActive ? "#0050FF" : "#000000"}
                  >
                    Straight Tuck End
                  </Text>
                </ContainerSelectProductItem>
              );
            })}
          </ContainerSelectProduct>
        </>
      )}
    </Container>
  );
}
