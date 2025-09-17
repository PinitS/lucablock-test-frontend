"use client";
import React from "react";
import styled from "styled-components";
import { Text } from "@/components/Text";
import Link from "next/link";
import ICON_SEARCH from "@/assets/svgs/ICON_SEARCH.svg";
import ICON_CART from "@/assets/svgs/ICON_CART.svg";
import ICON_PROFILE from "@/assets/svgs/ICON_PROFILE.svg";
import ICON_LOGO from "@/assets/svgs/ICON_LOGO.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #000000;
`;

const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const ContainerAction = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const MENU_LIST = [
  { label: "หน้าหลัก", navigate: "home" },
  { label: "เกี่ยวกับเรา", navigate: "about" },
  { label: "สินค้า", navigate: "products" },
  { label: "บทความ", navigate: "blog" },
  { label: "โปรโมชั่น", navigate: "promotion" },
  { label: "คูปองส่วนลด", navigate: "coupons" },
  { label: "สินค้าลดราคา", navigate: "sale" },
  { label: "ดาวน์โหลด", navigate: "download" },
  { label: "3D models", navigate: "models" },
];

export default function Header() {
  return (
    <Container>
      <ContainerLogo>
        <ICON_LOGO />
        <Text as="h1" $fontSize={24} $fontWeight={700} $color="#fff">
          Lucablock
        </Text>
      </ContainerLogo>

      <ContainerMenu>
        {MENU_LIST.map((item) => (
          <Link key={item.navigate} href={`/${item.navigate}`}>
            <Text
              as="p"
              $fontSize={14}
              $lineHeight={18}
              $fontWeight={400}
              $color="#fff"
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </ContainerMenu>
      <ContainerAction>
        <ICON_SEARCH />
        <ICON_CART />
        <ICON_PROFILE />
      </ContainerAction>
    </Container>
  );
}
