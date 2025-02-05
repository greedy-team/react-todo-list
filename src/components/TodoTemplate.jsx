import styled from "styled-components";
import GreedySquareImage from "../assets/greedySquareImage.jpg"

const HeaderContainer = styled.div`
    align-items: center;
    background: #007356;
    color: #fff;
    display: flex;
    font-size: 1.5rem;
    height: 4rem;
    justify-content: center;
    width: 516px;
`;

const Title = styled.div`
`;

const GreedyImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
`;

const TodoTemplate = () => {
    return (
        <HeaderContainer>
            <GreedyImage src={GreedySquareImage} />
            <Title>일정관리</Title>
        </HeaderContainer>
    );
}

export default TodoTemplate;