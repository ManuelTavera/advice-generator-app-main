import styled from "styled-components";
import { COLORS } from "../constant";

function App() {
  return (
    <Wrapper>
      <MessageWrapper>
        <Title>Advice #117</Title>
        <Message>
          It is easy to sit up and take notice, what's difficult is getting up
          and taking action.
        </Message>
      </MessageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${COLORS["desaturatedBlue"]};
  justify-content: center;
  align-items: center;
`;

const MessageWrapper = styled.div`
  background-color: ${COLORS["darkBlueTwo"]};
  width: clamp(375px, 80%, 650px);
  max-width: 100%;
  position: relative;
  padding: 40px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: ${COLORS["neonGreen"]};
`;

const Message = styled.h1`
  font-size: ${28 / 16}rem;
  color: ${COLORS["lightCyan"]};

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
`;

export default App;
