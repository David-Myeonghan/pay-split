import { Container } from "react-bootstrap";
import styled from "styled-components";
import { OverlayWrapper } from "./shared/OverlayWrapper";
import { IChildrenProps } from "types/common.type";


const CenteredOverlayForm = ({ children }: IChildrenProps) => {
  return (
    <StyledCentralizedContainer>
      <StyledHeader>Pay split</StyledHeader>
      <OverlayWrapper>{children}</OverlayWrapper>
    </StyledCentralizedContainer>
  );
};

export default CenteredOverlayForm;

const StyledHeader = styled.h1`
font-weight: 200;
letter-spacing: 10px;

`;

const StyledCentralizedContainer = styled(Container)`
  width: 50vw; // 859px / 1920 * 100  == 50vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;
