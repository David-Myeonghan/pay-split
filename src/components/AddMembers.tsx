import { FormEvent, FormEventHandler, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { InputTags } from "react-bootstrap-tagsinput";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { groupMembersState } from "../state/groupMembers";
import { groupNameState } from "../state/groupName";
import CenteredOverlayForm from "./CenteredOverlayForm";

const AddMembers = () => {
  const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState);
  const groupName = useRecoilValue(groupNameState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  }

  console.log(groupMembers)

  return (
      <CenteredOverlayForm>
      <Container>
        <Form noValidate onSubmit={handleSubmit}>
          {/* <StyledRow> */}
            <Row>
              <h2>Let's name each group member of {groupName} </h2>
            </Row>
            <Row>
              <InputTags
                data-testid="input-member-names"
                values={groupMembers}
                placeholder="Space between each name"
                onTags={(value) => {
                  if (typeof value.values === 'string') {
                    setGroupMembers(value.values)
                  }
                }
              }
              />
              {formSubmitted && groupMembers.length === 0 && <span>그룹 멤버들의 이름을 입력해주세요</span>}
            </Row>
            <Row>
              <Button type="submit">Save</Button>
            </Row>
          {/* </StyledRow> */}
        </Form>
      </Container>
    </CenteredOverlayForm>

  );
};

export default AddMembers;
