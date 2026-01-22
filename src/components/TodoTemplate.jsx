import styled from "styled-components";
import greedySquareImage from "../assets/greedySquareImage.jpg";

export default function TodoTemplate({ children }) {
  return (
    <Template>
      <TemplateTitle>
        <img src={greedySquareImage} alt="Greedy Icon" />
        <h1>일정관리</h1>
      </TemplateTitle>
      <TemplateContent>{children}</TemplateContent>
    </Template>
  );
}
const Template = styled.div`
  width: 512px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  overflow: hidden;
`;

const TemplateTitle = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4rem;
  background-color: var(--greedyColor);
  justify-content: center;
  color: #fff;

  img {
    width: 4rem;
    height: 4rem;
  }

  h1 {
    font-size: 1.5rem;
  }
`;

const TemplateContent = styled.section`
  background-color: white;
`;
