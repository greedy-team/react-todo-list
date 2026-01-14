import styled from 'styled-components';
import greedyIcon from '../assets/greedySquareImage.jpg';

export default function TodoTemplate({ children }) {
  return (
    <Wrapper>
      <Title>
        <img src={greedyIcon} />
        일정관리
      </Title>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: none;
  border-radius: 5px;

  overflow: hidden;
`;

const Title = styled.h1`
  color: white;
  font-size: 27px;
  font-weight: normal;
  width: 500px;
  height: 80px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #007356;

  img {
    width: 70px;
    height: 70px;
  }
`;

