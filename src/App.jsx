import styled from "styled-components";
import { COLORS } from "../constant";
import desktopPattern from "../src/assets/pattern-divider-desktop.svg";
import dice from "../src/assets/icon-dice.svg";

function App() {
  return (
    <Wrapper>
      <MessageWrapper>
        <Title>A d v i c e # 1 1 7</Title>
        <Message>
          It is easy to sit up and take notice, what's difficult is getting up
          and taking action.
        </Message>
        <DesktopPattern src={desktopPattern} alt="Pattern desktop" />
        <IconWrapper>
          <Icon src={dice} alt="Dice icon" />
        </IconWrapper>
      </MessageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${COLORS["darkBlue"]};
  justify-content: center;
  align-items: center;
`;

const MessageWrapper = styled.div`
  background-color: ${COLORS["darkGrayishBlue"]};
  width: clamp(375px, 80%, 575px);
  max-width: 100%;
  position: relative;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: ${COLORS["neonGreen"]};
  font-weight: 800;
  margin-bottom: 25px;
`;

const Message = styled.h1`
  font-size: ${28 / 16}rem;
  color: ${COLORS["lightCyan"]};
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 40px;

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
`;

const DesktopPattern = styled.img`
  width: 100%;
  margin-bottom: 40px;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS["neonGreen"]};
  border-radius: 50%;
  margin-bottom: -75px;
`;

const Icon = styled.img`
  width: 40%;
  height: auto;
`;

export default App;
