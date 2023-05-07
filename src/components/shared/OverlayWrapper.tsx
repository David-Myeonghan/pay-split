import styled from "styled-components";
import { IChildrenProps } from "types/common.type";

export const OverlayWrapper = ({ children }: IChildrenProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div<{ minHeight?: number; padding?: string }>`
  padding: ${({ padding }) => padding || "5vw"};
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  min-height: ${(props) => props.minHeight || 0};
`;
