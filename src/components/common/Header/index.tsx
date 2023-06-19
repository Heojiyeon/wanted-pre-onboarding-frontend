import React from "react";
import { StyledHeaderContainer } from "./style";

type TitleProps = {
  title: string;
};

export default function Header({ title }: TitleProps) {
  return <StyledHeaderContainer>{title}</StyledHeaderContainer>;
}
