import { Button, Container, Form, Row } from "react-bootstrap";
import CenteredOverlayForm from "./CenteredOverlayForm";

import { useRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { useState } from "react";

const CreateGroup = () => {
    const [validated, setValidated] = useState(false);
    const [validGroupName, setValidGroupName] = useState(false)
    const [groupName, setGroupName] = useRecoilState(groupNameState);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const form = event?.currentTarget;
        if (form.checkValidity()) {
            setValidGroupName(true)
        } else {
            event.stopPropagation();
            setValidGroupName(false)
        }
        setValidated(true);

    }

  return (
    <div>
      <h1>Pay split</h1>

      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <h2>Let's name the group you want to pay split?</h2>
          </Row>
          <Row>
            <Form.Group controlId="validationGroupName">
              <Form.Control
                type="text"
                required
                placeholder="2022 Cairns trip"
                onChange={e  => setGroupName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid" data-valid={validGroupName}>
                Type group name
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit">Save</Button>
          </Row>
        </Form>
      </Container>

      {/* <CenteredOverlayForm /> */}
    </div>
  );
};

export default CreateGroup;
