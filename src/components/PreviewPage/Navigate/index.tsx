"use client";
import React from "react";
import styled from "styled-components";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import ICON_ARROW from "@/assets/svgs/ICON_ARROW.svg";
import ICON_PACKAGE from "@/assets/svgs/ICON_PACKAGE.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
`;

const ContainerNavigate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 220px;
`;

const ContainerDropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 220px;
`;

export default function Navigate() {
  return (
    <Container>
      <ContainerNavigate>
        <Button
          $gap={8}
          $width={80}
          $height={40}
          $borderColor="#EEEEEE"
          $borderRadius={8}
          $shadow="0px 1px 5px 0px #0000000D"
        >
          <ICON_ARROW />
          <Text as="span" $fontSize={14} $fontWeight={400} $color="black">
            กลับ
          </Text>
        </Button>

        <Button
          $gap={8}
          $width={130}
          $height={40}
          $borderColor="#EEEEEE"
          $borderRadius={8}
          $shadow="0px 1px 5px 0px #0000000D"
        >
          <ICON_PACKAGE />
          <Text as="span" $fontSize={14} $fontWeight={400} $color="black">
            สินค้าทั้งหมด
          </Text>
        </Button>
      </ContainerNavigate>
      <Text as="h1" $fontSize={24} $fontWeight={700} $color="black">
        Tuck end box
      </Text>
      <ContainerDropdown />
    </Container>
  );
}
