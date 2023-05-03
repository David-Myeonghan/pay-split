import { render, screen } from "@testing-library/react"
import CreateGroup from "./CreateGroup"

const renderComponent = () => {
    render(<CreateGroup />)
}

describe('그룹 생성 페이지', () => {
    test('그룹 이름 입력 컴포넌트가 렌더링 되는가', () => {
        renderComponent();


        // todo: input component
        // todo: save button
    })

    test('그룹 이름을 입력하지 않고 저장 버튼 클릭시, 에러 메시지 노출', () => {

    })

    test('그룹 이름 입력 후, 저장 버튼을 클릭시, 저장 성공', () => {

    })
})