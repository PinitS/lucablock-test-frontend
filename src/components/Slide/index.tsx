"use client";

import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@/components/ui/slider";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import ICON_SLIDE from "@/assets/svgs/ICON_SLIDE.svg";
import styled from "styled-components";

type SliderDemoProps = {
  openValue: number;
  setOpenValue: Dispatch<SetStateAction<number>>;
  className?: string;
};

const ContainerSlider = styled(Slider)`
  position: relative;
  width: 100%;
  height: 8px;
  display: flex;
  align-items: center;
`;

const StyledTrack = styled(SliderTrack)`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 150px;
`;

const StyledRange = styled(SliderRange)`
  position: absolute;
  height: 100%;
  background-color: #0050FF;
  border-radius: 150px;
`;

const StyledThumb = styled(SliderThumb)`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 24px;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function SliderComponent({
  openValue,
  setOpenValue,
  className,
}: SliderDemoProps) {
  return (
    <ContainerSlider
      value={[openValue]}
      onValueChange={(val) => setOpenValue(val[0])}
      max={100}
      step={1}
      className={className}
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb
        className={cn(
          "flex items-center justify-center",
          "w-10 h-10 rounded-full bg-white shadow-md border border-gray-300",
          "focus:outline-none focus:ring-0 focus:ring-offset-0"
        )}
      >
        <ICON_SLIDE />
      </StyledThumb>
    </ContainerSlider>
  );
}
