import { Button, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";

import CenteredOverlayForm from "./CenteredOverlayForm";
import { useRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { useState } from "react";

const CreateGroup = () => {
  const [validated, setValidated] = useState(false);
  const [validGroupName, setValidGroupName] = useState(false);
  const [groupName, setGroupName] = useRecoilState(groupNameState);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const form = event?.currentTarget;
    if (form.checkValidity()) {
      setValidGroupName(true);
    } else {
      event.stopPropagation();
      setValidGroupName(false);
    }
    setValidated(true);
  };

  return (
    <CenteredOverlayForm>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <StyledRow>
            <Row className="align-items-start">
              <StyledH2>Let's name the group you want to pay split?</StyledH2>
            </Row>
            <Row className="align-items-center">
              <Form.Group controlId="validationGroupName">
                <Form.Control
                  type="text"
                  required
                  placeholder="2022 Cairns trip"
                  onChange={(e) => setGroupName(e.target.value)}
                />
                <Form.Control.Feedback
                  type="invalid"
                  data-valid={validGroupName}
                >
                  Type group name
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="align-items-end">
              <StyledSubmitButton type="submit">Save</StyledSubmitButton>
            </Row>
          </StyledRow>
        </Form>
      </Container>
    </CenteredOverlayForm>
  );
};

export default CreateGroup;

const StyledH2 = styled.h2`
  font-weight: 700;
  line-height: 36px;

  text-align: right;
  overflow-wrap: break-word;
  word-break: keep-all;
`;

const StyledSubmitButton = styled(Button)`
  background: #6610f2;
  border-radius: 8px;
  border: none;

  &:hover {
    background: #6610f2;
    filter: brightness(80%);
  }
`;

const StyledRow = styled(Row)`
  height: 60vh;
  align-items: center;
  justify-content: center;
`;
