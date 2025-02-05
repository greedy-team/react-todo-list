import styled from "styled-components";
import GreedySquareImage from "../assets/greedySquareImage.jpg"
import TodoInsert from "./TodoInsert.jsx";

const Container = styled.div`
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    overflow: hidden;
    width: 512px;
`;

const HeaderContainer = styled.div`
    align-items: center;
    background: #007356;
    color: #fff;
    display: flex;
    font-size: 1.5rem;
    height: 4rem;
    justify-content: center;
    width: 100%;
`;

const Title = styled.div`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
`;

const GreedyImage = styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: cover;
`;

const Contents = styled.div`
    background: #fff;
    display: block;
    width: 100%;
    height: 512px;
`;

const TodoTemplate = () => {
    return (
        <Container>
            <HeaderContainer>
                <GreedyImage src={GreedySquareImage} />
                <Title>일정관리</Title>
            </HeaderContainer>
            <Contents>
                <TodoInsert></TodoInsert>
            </Contents>
        </Container>
    );
}

export default TodoTemplate;