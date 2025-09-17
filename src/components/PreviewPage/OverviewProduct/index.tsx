"use client";
import { ProductAttributeInterface } from "@/interface/ProductAttributeInterface";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ICON_3D from "@/assets/svgs/ICON_3D.svg";
import ICON_DIELINE from "@/assets/svgs/ICON_DIELINE.svg";
import ICON_PICTURE from "@/assets/svgs/ICON_PICTURE.svg";
import ICON_PLUS from "@/assets/svgs/ICON_PLUS.svg";
import ICON_MINUS from "@/assets/svgs/ICON_MINUS.svg";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { SliderComponent } from "@/components/Slide";

const Container = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerAction = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 710px;
  gap: 8px;
  /* height: 48px; */
  background-color: white;
  bottom: 24px;
  box-shadow: 0px 0px 8px 0px #00000026;
  border-radius: 16px;
  padding: 8px;
`;

const GroupActionButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .button-plus {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .button-minus {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const LineVertical = styled.div`
  height: 24px;
  width: 1px;
  background-color: #eeeeee;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: clamp(150px, 25vw, 260px);
  height: clamp(375px, 55vh, 520px);
  pointer-events: none;
`;

const ContainerPercentage = styled.div`
  height: 32px;
  width: 48px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerScroll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 294px;
  height: 32px;
  padding: 8px;
  gap: 8px;
`;

const ContainerSlide = styled.div`
  flex: 1;
  height: 32px;
  display: flex;
  align-items: center;
`;

const SELECT_LAYOUT_LIST = [
  { label: "3D", value: "3D", icon: ICON_3D },
  { label: "Dieline", value: "DIELINE", icon: ICON_DIELINE },
  { label: "Picture", value: "PICTURE", icon: ICON_PICTURE },
];

export default function OverviewProduct({
  selectedProducts,
}: {
  selectedProducts: ProductAttributeInterface;
}) {
  const [selectedLayoutType, setSelectedLayoutType] = useState<string>("3D");

  const [percentage, setPercentage] = useState<number>(100);

  const [openValue, setOpenValue] = useState<number>(50);

  const handleClickPercentage = ({
    type = "increase",
  }: {
    type: "increase" | "decrease";
  }) => {
    setPercentage((prev) => {
      if (type === "increase") {
        return Math.min(prev + 10, 100);
      } else {
        return Math.max(prev - 10, 0);
      }
    });
  };
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={selectedProducts.productImgPath}
          alt={selectedProducts.productName}
          fill
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </ImageWrapper>
      <ContainerAction>
        <GroupActionButton>
          {SELECT_LAYOUT_LIST.map((item, index) => {
            const isActive = item?.value === selectedLayoutType;
            const ICON_COMPONENT = item.icon;
            return (
              <Button
                onClick={() => setSelectedLayoutType(item.value)}
                key={index}
                $gap={4}
                $width={80}
                $height={32}
                $borderRadius={8}
                $backgroundColor={isActive ? "#000000" : "transparent"}
              >
                <ICON_COMPONENT fill={isActive ? "#fff" : "#000000"} />
                <Text
                  as="span"
                  $fontSize={12}
                  $fontWeight={400}
                  $color={isActive ? "#fff" : "#000000"}
                >
                  {item.label}
                </Text>
              </Button>
            );
          })}
        </GroupActionButton>
        <LineVertical />

        <ContainerScroll>
          <Button
            $borderRadius={8}
            $borderColor="#EEEEEE"
            $height={32}
            $width={56}
            $backgroundColor={"#fff"}
          >
            <Text as="span" $fontSize={12} $fontWeight={400} $color={"#000000"}>
              Close
            </Text>
          </Button>
          <ContainerSlide>
            <SliderComponent openValue={openValue} setOpenValue={setOpenValue} />
          </ContainerSlide>

          <Button
            $borderRadius={8}
            $borderColor="#EEEEEE"
            $height={32}
            $width={56}
            $backgroundColor={"#fff"}
          >
            <Text as="span" $fontSize={12} $fontWeight={400} $color={"#000000"}>
              Open
            </Text>
          </Button>
        </ContainerScroll>
        <LineVertical />

        <GroupActionButton>
          <Button
            onClick={() => handleClickPercentage({ type: "decrease" })}
            $borderColor="#EEEEEE"
            className="button-minus"
            $isSquare
            $gap={4}
            $height={32}
            $backgroundColor={"#fff"}
          >
            <ICON_MINUS />
          </Button>

          <ContainerPercentage>
            <Text as="span" $fontSize={12} $fontWeight={400} $color={"#000000"}>
              {`${percentage}%`}
            </Text>
          </ContainerPercentage>

          <Button
            onClick={() => handleClickPercentage({ type: "increase" })}
            $borderColor="#EEEEEE"
            className="button-plus"
            $isSquare
            $gap={4}
            $height={32}
            $backgroundColor={"#fff"}
          >
            <ICON_PLUS />
          </Button>
        </GroupActionButton>
      </ContainerAction>
    </Container>
  );
}
