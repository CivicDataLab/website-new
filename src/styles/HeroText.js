import styled from 'styled-components';

const HeroText = styled.h1`
  font-family: 'Bungee', cursive;
  font-size: 32px;
  line-height: 32px;
  color: ${(props) => (props.light ? 'white' : 'black')};
  text-transform: uppercase;
  margin: 0;
  text-align: left;
  width: min-content;

  @media (min-width: 1024px) {
    font-size: 60px;
    line-height: 60px;
  }
`;

export default HeroText;
