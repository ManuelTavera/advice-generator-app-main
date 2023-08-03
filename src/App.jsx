import { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../constant";
import desktopPattern from "../src/assets/pattern-divider-desktop.svg";
import mobilePattern from "../src/assets/pattern-divider-mobile.svg";
import dice from "../src/assets/icon-dice.svg";

const initialState = { id: null, advice: "", error: false, loading: false };

function App() {
  const [state, setState] = useState(initialState);

  const fetchAdvice = () => {
    setState({ ...state, loading: true });

    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setState({
          ...data.slip,
          error: false,
          loading: false,
        });
      })
      .catch((error) => {
        const { message } = error;
        setState({ error: true, advice: message.text, loading: false });
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const addWhiteSpaces = (id) => {
    if (id !== null) {
      const newId = id
        .toString()
        .split("")
        .map((item) => `${item}  `);
      return newId;
    }
  };

  return (
    <Wrapper>
      <MessageWrapper>
        { /* prettier-ignore */ }
        <Title>A  d  v  i  c  e  #  {addWhiteSpaces(state.id)}</Title>
        <Message>{state.advice}</Message>
        <DesktopPattern src={desktopPattern} alt="Pattern desktop" />
        <MobilePatter src={mobilePattern} alt="Pattern desktop" />
        <IconWrapper fetching={state.loading} onClick={fetchAdvice}>
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
  width: clamp(340px, 80%, 575px);
  max-width: 100%;
  position: relative;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;

  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Title = styled.p`
  text-transform: uppercase;
  color: ${COLORS["neonGreen"]};
  font-weight: 800;
  margin-bottom: 25px;
  font-size: ${14 / 16}rem;
  white-space: pre-wrap;

  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    font-size: ${12 / 16}rem;
  }
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

  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    font-size: ${24 / 16}rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 25px;
  }
`;

const DesktopPattern = styled.img`
  width: 100%;
  margin-bottom: 40px;
  display: block;

  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    display: none;
  }
`;

const MobilePatter = styled.img`
  width: 100%;
  margin-bottom: 30px;
  display: none;

  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    display: block;
  }
`;

const IconWrapper = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS["neonGreen"]};
  border-radius: 50%;
  margin-bottom: -75px;
  border: none;
  cursor: pointer;
  pointer-events: ${(props) => (props.fetching ? "none" : "auto")};
  transition: all 0.8s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 30px ${COLORS["neonGreen"]};
  }
`;

const Icon = styled.img`
  width: 40%;
  height: auto;
`;

export default App;
