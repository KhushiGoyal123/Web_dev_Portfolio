import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {darkTheme} from "./Themes";


import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from '../subComponents/ParticleComponent';

import astronaut from "../assets/Images/spaceman.png"
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

`

const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 8%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img{
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 2;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 7rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <Box>
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark"/>
          <PowerButton />
          <ParticleComponent theme="dark"/>

          <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman>

          <Main>
          I'm a full stack developer located in India. I love to develop amazing websites with great user experience.
          <br /><br />
          I'm also interested in Cloud Computing. I love to try new things and learn different tech stacks and merge them to create my own.  I love reading books and experimenting my skills.
          <br /><br />
          I believe everything is learning and every learning brings with itself a lot of experience when you put your consciousness in it. You can connect with me via social links.
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
    </ThemeProvider>
  )
}

export default AboutPage