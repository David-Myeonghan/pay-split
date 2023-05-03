import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from 'react';
import CreateGroup from "./CreateGroup";
import { RecoilRoot } from "recoil";

const renderComponent = () => {
  render(
    <RecoilRoot>
      <CreateGroup />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText("2022 Cairns trip");
  const saveButton = screen.getByText("Save");
  const errorMessage = screen.queryByText("Type group name");

  return {
    input,
    saveButton,
    errorMessage,
  };
};

describe("그룹 생성 페이지", () => {
  test("그룹 이름 입력 컴포넌트가 렌더링 되는가", () => {
    const { input, saveButton } = renderComponent();

    // todo: input component
    expect(input).not.toBeNull();
    // todo: save button
    expect(saveButton).not.toBeNull();
  });

  test("그룹 이름을 입력하지 않고 저장 버튼 클릭시, 에러 메시지 노출", async () => {
    const { errorMessage, saveButton } = renderComponent();

    await userEvent.click(saveButton);
    expect(errorMessage).not.toBeNull();
  });

  test("그룹 이름 입력 후, 저장 버튼을 클릭시, 저장 성공", async () => {
    const { errorMessage, input, saveButton } = renderComponent();

    await userEvent.type(input, "Expected group name");
    await userEvent.click(saveButton);

    expect(errorMessage).tobeNull();
  });
});
