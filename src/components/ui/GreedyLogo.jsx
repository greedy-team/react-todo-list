import greedySquareImage from '../../assets/greedySquareImage.jpg';
import styled from 'styled-components';

const GreedyLogo = () =>{

  return <GreedyLogoImage
    src={greedySquareImage}
    alt={'Greedy 로고'}
  />;

};

export default GreedyLogo;

const GreedyLogoImage = styled.img`
  margin-right: 10px;
  width: auto;
  height: 100%;
  object-fit:contain ;
`;
